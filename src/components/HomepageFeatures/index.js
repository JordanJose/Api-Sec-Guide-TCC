import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Descrição',
    Svg: require('@site/static/img/description.svg').default,
    description: (
      <>
        Conheça a vulnerabilidade a qual sua API pode estar exposta!
      </>
    ),
  },
  {
    title: 'Exploração',
    Svg: require('@site/static/img/exploration.svg').default,
    description: (
      <>
        Saiba possíveis testes para descobrir se há fragilidades em seu código.
      </>
    ),
  },
  {
    title: 'Correção',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        Conheça como corrigir seu código a fim de mitigar a vulnerabilidade.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
