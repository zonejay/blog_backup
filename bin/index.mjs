import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter'
import removeMd from 'remove-markdown'

async function traverseDir(dir, articles) {
  const files = await fs.readdir(dir)
  for await (const file of files) {
    let fullPath = path.join(dir, file);
    const fileStat = await fs.lstat(fullPath)
    if (fileStat.isDirectory()) {
      await traverseDir(fullPath, articles);
    } else {
      articles.push(fullPath)
    }
  }
}

const articles = []
await traverseDir('docs/post', articles)
const projectBase = 'docs/'

function formatDate(date) {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  return `${year}-${month}-${day}`
}

const data = await Promise.all(
  articles.map(async (article) => {
    const file = matter.read(article, {
      excerpt: true,
      excerpt_separator: '<!-- more -->'
    })

    const { data, excerpt, path: filePath } = file
    const contents = removeMd(excerpt).trim().split(/\r\n|\n|\r/)
    const date = data.date

    const relativePath = path.relative(projectBase, filePath)

    return {
      ...data,
      // content: contents[0].replace(/\s{2,}/g, '').trim(),
      path: relativePath.replace(/\.md$/, '.html'),
      excerpt: contents.slice(1).join('').replace(/\s{2,}/g, '').trim(),
      date: formatDate(date)
    }
  })
)

// sort articles on time
data.sort((d1, d2) => {
  const timestampD1 = new Date(d1.date)
  const timestampD2 = new Date(d2.date)
  if (timestampD1.getTime() < timestampD2.getTime()) {
    return 1
  } else {
    return -1
  }
})


// 获取侧边栏数据
const sidebarData = data.map(item => {
  return {
    text: item.title,
    link: `/${item.path.slice(0, -5)}`
  }
})

await fs.writeFile('./data.json', JSON.stringify(data), 'utf-8')
await fs.writeFile('./docs/.vitepress/siderbar.ts', `export default ${JSON.stringify(sidebarData)}`)