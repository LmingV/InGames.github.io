import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

const knowledgeMap = [
    {
        icon: "🌌",
        title: "Echoverse · 回声宇宙",
        description: "回声宇宙的世界观、角色、攻略与游戏资料。",
        to: "/docs/echoverse"
    },
    {
        icon: "🌅",
        title: "DawnBefore · 黎明之前",
        description: "黎明之前的世界观、角色、攻略与游戏资料。",
        to: "/docs/dawnbefore"
    },
    {
        icon: "📖",
        title: "快速开始",
        description: "了解如何参与编辑、本地运行与发布内容。",
        to: "/docs/intro"
    },
    {
        icon: "💬",
        title: "加入社区",
        description: "加入官方交流群，与其他玩家一起讨论。",
        to: "https://qm.qq.com/q/oZ0eFOF91C"
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
                {/* Hero */}
                <div className={styles.heroWrapper}>
                    <section className={styles.hero}>
                        <div className={styles.heroCopy}>
                            <span className={styles.heroSmall}>{siteConfig.title}</span>
                            <h1>游戏资料百科</h1>
                            <p>专注游戏资料整理的百科站点</p>
                            <Link className={styles.heroButton} to="/docs/echoverse">
                                快速开始 🎮
                            </Link>
                        </div>
                        <div className={styles.heroImage}>
                            <img src="/img/home.png" alt="InGames Wiki" />
                        </div>
                    </section>
                </div>

                {/* 四大模块卡片 */}
                <section className={styles.map}>
                    <div className={styles.sectionHeading}>
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

                {/* 社区 */}
                <section className={styles.community}>
                    <div className={styles.communitySurface}>
                        <div className={styles.communityIntro}>
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
