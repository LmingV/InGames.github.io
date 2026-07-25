// @ts-check
// Docusaurus 配置文件，详见 https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'InGames Wiki',
  tagline: '游戏资料百科',
  favicon: 'img/logo.svg',

  // 站点最终访问地址（自定义域名）
  url: 'https://InGames.wiki',
  // 自定义域名下部署在根路径
  baseUrl: '/',

  // GitHub Pages 部署配置
  organizationName: 'LmingV', // GitHub 用户名/组织名
  projectName: 'InGames.github.io', // 仓库名
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // 国际化：以简体中文为默认语言
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // 每篇文档右上角“编辑此页”链接指向 GitHub
          editUrl:
            'https://github.com/LmingV/InGames.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/LmingV/InGames.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'InGames Wiki',
        logo: {
          alt: 'InGames Wiki Logo',
          src: 'img/home.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'echoverseSidebar',
            position: 'left',
            label: 'Echoverse-回声宇宙',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dawnbeforeSidebar',
            position: 'left',
            label: 'DawnBefore-黎明之前',
          },
          {
            href: 'https://github.com/LmingV/InGames.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '快速开始',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '更多',
            items: [              
              {
                label: '官方交流群-①',
                href: 'https://qm.qq.com/q/oZ0eFOF91C',
              },
              {
                label: '官方交流群-②',
                href: 'https://qm.qq.com/q/Q8CDwvVzW',
              },              
              {
                label: 'GitHub',
                href: 'https://github.com/LmingV/InGames.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} InGames Wiki. 最终解释权归InGames团队所有`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
