---
layout: home
title: 黎明之前
hero:
  name: 
  text: 旧神世界的新纪元
  tagline: 挖掘·淬炼·创世·新生
  image:
    src: /home.png
    alt: HomePIC
  actions:
    - theme: brand
      text: 神谕密卷
      link: /about/first
    - theme: alt
      text: 游戏指南
      link: /tutorials/upgrade
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #d4af37 30%, #7a3b3b 70%);
  --vp-button-brand-bg: #2c1a0f;
  --vp-button-brand-hover-bg: #4a2c1a;
  --vp-c-brand: #d4af37;

  --bg-color: #f5f5f5;
  --text-color: #333;
  --link-color: #d4af37;
  --link-hover-color: #7a3b3b;
  --border-color: #ddd;
  --card-bg-color: #fff;
  --card-border-color: #4a2c1a;
}

.dark {
  --bg-color: #1a120b;
  --text-color: #666;
  --link-color: #d4af37;
  --link-hover-color: #7a3b3b;
  --border-color: #4a2c1a;
  --card-bg-color: #2c1a0f;
  --card-border-color: #d4af37;
}

.mechanics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.mechanic-card {
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--card-border-color);
  background-color: var(--card-bg-color);
  transition: transform 0.3s;
}

.mechanic-card:hover {
  transform: translateY(-5px);
  border-color: var(--link-color);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--link-color);
}

.progress-steps {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 4rem 0;
}

.step {
  text-align: center;
  flex: 0 1 200px;
}

.step-marker {
  width: 40px;
  height: 40px;
  background: var(--link-color);
  color: var(--bg-color);
  border-radius: 50%;
  margin: 0 auto 1rem;
  line-height: 40px;
  font-weight: bold;
}

.footer {
    text-align: center;
    font-size: 14px;
    color: var(--text-color);
    padding: 20px 0;
    background-color: var(--bg-color);
    border-top: 1px solid var(--border-color);
}

.footer a {
    color: var(--link-color);
    text-decoration: none;
}

.footer a:hover {
    color: var(--link-hover-color);
    text-decoration: underline;
}

@media (max-width: 768px) {
  .progress-steps {
    flex-direction: column;
    gap: 2rem;
  }

  .footer {
    font-size: 12px;
    padding: 15px 0;
  }
}
</style>

## ⚒️ 核心玩法体系

<div class="mechanics-grid">

<div class="mechanic-card">
<div class="card-icon">⛏️</div>
### 神骸矿狱
- 动态生成的泰坦矿脉
- 星纹钢淬炼系统
- 罪孽值警报机制
</div>

<div class="mechanic-card">
<div class="card-icon">🏰</div>
### 浮空神域
- 可扩展空岛架构
- 粘液科技核心
- 神域风格化改造
</div>

<div class="mechanic-card">
<div class="card-icon">🔗</div>
### 契约统御
- 神格仆从进化
- 精灵元素共鸣
- 灵魂绑定装备
</div>
</div>

## 🛣️ 新手指引

<div class="progress-steps">

<div class="step">
<div class="step-marker">1</div>
### 奠基
获取基础工具  
建立初始空岛
</div>

<div class="step">
<div class="step-marker">2</div>
### 觉醒
激活首只仆从  
完成首次淬炼
</div>

<div class="step">
<div class="step-marker">3</div>
### 抉择
宣誓效忠阵营  
解锁进阶科技
</div>

</div>