import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/InGames.github.io/",
  title: "InGames",
  description: "回声宇宙官方WIKI",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "购买云服务器", link: "/buy" },
      { text: "活动", link: "/activity" },
      { text: "服务端", link: "/server" },
      { text: "找插件", link: "/plugin" },
    ],
    footer: {
      copyright: "版权所有 © 2025 黎明之前. 保留所有权利."
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
