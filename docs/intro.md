---
sidebar_position: 1
---

# 快速开始

欢迎来到 **InGames Wiki**，这里是游戏资料的百科站点。

## 环境要求

在本地开发前，请确保安装了 [Node.js](https://nodejs.org/en/download/) 18.0 或更高版本。

## 本地运行

在项目根目录执行以下命令安装依赖并启动本地预览：

```bash
npm install
npm start
```

浏览器会自动打开 `http://localhost:3000`，修改文档后页面会实时刷新。

## 添加内容

只需在 `docs/` 目录下新建 Markdown（`.md`）文件，侧边栏会自动生成对应的条目。例如：

```markdown
---
sidebar_position: 2
---

# 我的新页面

这里写正文内容……
```

## 发布上线

把改动推送到 GitHub 的 `main` 分支后，GitHub Actions 会自动构建并发布到 `https://InGames.wiki`，无需任何手动操作。

```bash
git add .
git commit -m "更新内容"
git push
```

稍等一两分钟，站点就会更新。
