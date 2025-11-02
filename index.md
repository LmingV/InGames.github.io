---
layout: home

hero:
  name: "InGames"
  text: "游戏爱好者的知识库"
  tagline: 探索游戏设计、开发与玩家社区的精彩世界
  image:
    src: /logo.png
    alt: InGames Logo
  actions:
    - theme: brand
      text: 开始探索
      link: /guide/
    - theme: alt
      text: 查看项目
      link: https://github.com/InGames.github.io

features:
  - icon: 🎮
    title: 游戏设计指南
    details: 从核心机制到关卡设计，掌握游戏创作的关键要素
    link: /design/
    linkText: 了解更多

  - icon: 💻
    title: 开发教程
    details: 涵盖Unity、Unreal及前端游戏开发的实用教程与技巧
    link: /development/
    linkText: 开始学习

  - icon: 👥
    title: 社区交流
    details: 加入玩家与开发者社区，分享经验与创意
    link: /community/
    linkText: 加入我们

  - icon: 📊
    title: 行业分析
    details: 最新游戏市场趋势、数据报告与行业洞察
    link: /industry/
    linkText: 查看报告

  - icon: 📚
    title: 资源库
    details: 精选工具、素材与学习资源，助力游戏创作
    link: /resources/
    linkText: 浏览资源

  - icon: 🎯
    title: 玩家攻略
    details: 热门游戏攻略、隐藏彩蛋与进阶技巧分享
    link: /guides/
    linkText: 查看攻略
---

## 📰 最新动态

<div class="news-grid">
  <div class="news-card">
    <h3>2023年游戏行业报告发布</h3>
    <p>包含全球游戏市场规模、用户增长及热门品类分析</p>
    <a href="/news/report-2023" class="read-more">阅读全文 →</a>
  </div>
  
  <div class="news-card">
    <h3>Unity 2023新特性详解</h3>
    <p>探索最新版本带来的性能提升与工作流优化</p>
    <a href="/news/unity-2023" class="read-more">阅读全文 →</a>
  </div>
  
  <div class="news-card">
    <h3>独立游戏开发者访谈</h3>
    <p>揭秘《星露谷物语》团队的创作历程与经验</p>
    <a href="/news/indie-interview" class="read-more">阅读全文 →</a>
  </div>
</div>

## 🎉 热门内容

| 分类 | 热门文章 | 阅读量 |
|------|----------|--------|
| 设计 | 《游戏关卡设计的7个原则》 | 2.4k |
| 开发 | 《Three.js实现3D游戏场景》 | 1.8k |
| 攻略 | 《艾尔登法环全Boss攻略》 | 5.2k |
| 资源 | 《2023免费游戏素材网站汇总》 | 3.7k |

<style>
/* 新闻卡片样式 */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  padding: 0 1rem;
}

.news-card {
  background: var(--vp-c-bg-soft);
  border-radius: var(--vp-radius-lg);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.news-card h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
  font-size: 1.2rem;
}

.news-card p {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.read-more {
  display: inline-block;
  color: var(--vp-c-brand);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.read-more:hover {
  color: var(--vp-c-brand-dark);
  text-decoration: underline;
}

/* 表格样式优化 */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
}

th, td {
  padding: 0.8rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
}

th {
  color: var(--vp-c-text-1);
  font-weight: 600;
  background: var(--vp-c-bg-soft);
}

tr:hover {
  background: var(--vp-c-bg-soft-up);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  table {
    font-size: 0.9rem;
  }
  
  th, td {
    padding: 0.6rem 0.8rem;
  }
}
</style>

---

<div style="text-align: center; margin-top: 5rem; padding: 2rem; background: var(--vp-c-bg-soft); border-radius: var(--vp-radius-lg);">
  <h3>加入我们的游戏开发者社区</h3>
  <p style="margin: 1rem 0 2rem 0; max-width: 600px; margin-left: auto; margin-right: auto;">
    与 thousands 名游戏爱好者一起交流学习，获取最新资讯与资源
  </p>
  <a href="/community/join" style="display: inline-block; background: var(--vp-c-brand); color: white; padding: 0.8rem 2rem; border-radius: var(--vp-radius-md); text-decoration: none; font-weight: 500;">
    立即加入
  </a>
</div>