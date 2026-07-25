import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            开始阅读 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎来到 ${siteConfig.title}`}
      description="游戏资料百科站点">
      <HomepageHeader />
      <main>
        <div className="container" style={{padding: '4rem 0', textAlign: 'center'}}>
          <p style={{fontSize: '1.1rem'}}>
            这是一个基于 Docusaurus 构建的游戏资料百科。
            在左侧文档中开始探索，或查看博客了解最新更新。
          </p>
        </div>
      </main>
    </Layout>
  );
}
