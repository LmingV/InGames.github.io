// .vitepress/config.ts
import { defineConfigWithTheme } from 'vitepress';
import type { ThemeConfig } from 'vitepress-theme-mild';
import baseConfig from 'vitepress-theme-mild/config';

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  base: "/InGames.github.io/",
  title: "InGames",
  description: "回声宇宙官方WIKI",
  themeConfig: {
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
    sidebar: {
      '/tutorials/': 'auto',
      '/about/': 'auto', // /config/ 目录自动生成侧边栏
      // 其他目录若需要，继续添加（如 '/server/': 'auto'）
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
});