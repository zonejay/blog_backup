import { defineConfig } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

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
    }
})