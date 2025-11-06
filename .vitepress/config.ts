// .vitepress/config.ts
import { defineConfigWithTheme } from 'vitepress';
import type { ThemeConfig } from 'vitepress-theme-mild';
import baseConfig from 'vitepress-theme-mild/config';

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  // base: "/LmingV.github.io/", //
  title: " ",
  description: "回声宇宙官方WIKI",
  css: ['./custom.css'], 
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: "首页", link: "/" },
      { text: "神谕密卷", link: "/about/first" },
      { text: "游戏指南", link: "/tutorials/upgrade" },
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