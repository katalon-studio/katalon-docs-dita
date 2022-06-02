import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Studio',
    Svg: require('@site/static/img/studio.svg').default,
    link: "docs/katalon-studio-enterprise/welcome-to-katalon-studio",
  },
  {
    title: 'Runtime Engine',
    Svg: require('@site/static/img/runtime_engine.svg').default,
    link: "docs/katalon-runtime-engine/introduction-to-runtime-engine",
  },
  {
    title: 'Recorder',
    Svg: require('@site/static/img/recorder.svg').default,
    link: "docs/katalon-recorder/get-started/overview",
  },
  {
    title: 'TestCloud',
    Svg: require('@site/static/img/testcloud.svg').default,
    link: "docs/katalon-testcloud/overview",
  },
  {
    title: 'TestOps',
    Svg: require('@site/static/img/testops.svg').default,
    link: "docs/katalon-testops/overview/testops-overview",
  },
  {
    title: 'Store',
    Svg: require('@site/static/img/store.svg').default,
    link: "docs/katalon-store/overview",
  },
];

function Feature({title, Svg, link}: FeatureItem) {
  return (
    <Link
      className={clsx('col col--4')}
      style={{ textDecoration: "none" }}
      to={link}
    >
      <div className={styles.featuresItem}>
        <div className={styles.featureSvg}>
          <Svg alt={title} />
        </div>
        <p className={styles.featuresText}>{title}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={clsx("container", styles.container)}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
