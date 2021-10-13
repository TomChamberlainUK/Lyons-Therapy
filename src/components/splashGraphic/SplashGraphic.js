import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './splashGraphic.module.scss';

export default function SplashGraphic() {
  return (
    <div className={styles.container}>
      <StaticImage
        src="../../images/logo-circular-accent.png"
        alt="Logo"
        objectFit="contain"
        className={styles.logo}
      />
      <div className={styles.boxes} >
        <div className={`${styles.box} ${styles.boxPrimary}`} />
        <div className={`${styles.box} ${styles.boxAccent}`} />
        <div className={`${styles.box} ${styles.boxSecondary}`} />
        <div className={`${styles.box} ${styles.boxDark}`} />
      </div>
    </div>
  );
}