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
      <div className={styles.boxPrimary} />
      <div className={styles.boxSecondary} />
      <div className={styles.boxDark} />
      <div className={styles.boxAccent} />
    </div>
  );
}