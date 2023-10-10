import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress';
import siderbar from './siderbar';

export default defineConfig({
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        siteTitle: 'zonejay\'s blog',
        nav: [
            {
                text: 'Tags',
                link: '/tags'
            }
        ],
        sidebar: [
            {
                text: '目录',
                items: siderbar
            }
        ]
    },
    vite:{
        plugins: [
            Unocss()
        ]
    }
})