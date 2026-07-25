import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

const stats = [
    { label: "游戏条目", value: "100+" },
    { label: "攻略文章", value: "300+" }
];

const quickLinks = [
    { title: "新手入门", description: "了解本站定位、阅读指引与使用方法", to: "/docs/intro" },
    { title: "游戏图鉴", description: "角色、道具、装备的详细资料", to: "/docs/intro" },
    { title: "攻略专区", description: "从入门到进阶的通关与养成攻略", to: "/docs/intro" }
];

const knowledgeMap = [
    {
        icon: "🎮",
        title: "游戏总览",
        description: "各款游戏的背景设定、玩法介绍与版本信息。",
        to: "/docs/intro"
    },
    {
        icon: "🗺️",
        title: "攻略指南",
        description: "主线流程、支线任务、隐藏要素的详细攻略。",
        to: "/docs/intro"
    },
    {
        icon: "⚔️",
        title: "角色与装备",
        description: "角色养成、技能搭配、装备选择与配装推荐。",
        to: "/docs/intro"
    },
    {
        icon: "💡",
        title: "技巧与心得",
        description: "实用技巧、常见问题、玩家经验与进阶思路。",
        to: "/docs/intro"
    }
];

const communityHighlights = [
    {
        title: "持续更新中",
        meta: "@Community · 进行中",
        description: "资料内容持续更新，跟随游戏最新版本和活动动态。"
    },
    {
        title: "开源协作",
        meta: "@Contributors · 持续",
        description: "欢迎通过 GitHub 提交建议、报告错误或补充资料。"
    },
    {
        title: "玩家友好",
        meta: "@Guide · 特点",
        description: "从零开始，清晰易懂地整理每一款游戏的核心资料。"
    }
];

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout title={siteConfig.title} description={siteConfig.tagline}>
            <main className={styles.page}>
                <section className={styles.hero}>
                    <div className={styles.heroCopy}>
                        <span className={styles.heroTag}>InGames Wiki</span>
                        <h1>InGames Wiki</h1>
                        <p>
                            专注游戏资料整理的百科站点。角色、攻略、装备、技巧，
                            从入门到精通，帮你快速找到需要的一切。
                        </p>
                        <div className={styles.heroButtons}>
                            <Link className={styles.primaryButton} to="/docs/intro">
                                立即开始
                            </Link>
                            <Link className={styles.secondaryButton} to="/blog">
                                查看博客
                            </Link>
                        </div>
                        <div className={styles.heroMetrics}>
                            {stats.map((item) => (
                                <div key={item.label}>
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <aside className={styles.heroPanel}>
                        <div className={styles.panelHeader}>
                            <span>快速导航</span>
                        </div>
                        <ul className={styles.linkList}>
                            {quickLinks.map((item) => (
                                <li key={item.title}>
                                    <Link to={item.to}>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                        <span>→</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </section>

                <section className={styles.map}>
                    <div className={styles.sectionHeading}>
                        <span>核心模块</span>
                        <h2>四大板块，覆盖游戏资料全流程</h2>
                        <p>从游戏总览到攻略指南，从角色装备到技巧心得，每个环节都有清晰整理。</p>
                    </div>
                    <div className={styles.mapGrid}>
                        {knowledgeMap.map((item) => (
                            <Link key={item.title} to={item.to} className={styles.mapCard}>
                                <span className={styles.mapIcon}>{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <span className={styles.mapAction}>查看详情 →</span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className={styles.community}>
                    <div className={styles.communitySurface}>
                        <div className={styles.communityIntro}>
                            <span>社区驱动</span>
                            <h2>开源协作，持续更新</h2>
                            <p>
                                InGames Wiki 由玩家共同维护，持续更新内容。
                                欢迎通过 GitHub 提交建议、报告问题或补充资料。
                            </p>
                            <div className={styles.communityCtas}>
                                <Link className={styles.primaryButton} to="https://github.com/LmingV/InGames.github.io">
                                    访问仓库
                                </Link>
                                <Link className={styles.secondaryButton} to="/docs/intro">
                                    使用指南
                                </Link>
                            </div>
                        </div>
                        <ul className={styles.communityFeed}>
                            {communityHighlights.map((item) => (
                                <li key={item.title}>
                                    <h3>{item.title}</h3>
                                    <span>{item.meta}</span>
                                    <p>{item.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
