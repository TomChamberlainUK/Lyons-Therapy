import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './indexContainer.module.scss';

export default function IndexContainer({ children }) {

  return (
    <div className={styles.indexContainer}>
      <div className={styles.imageFrame}>
        <div className={styles.imageWrapper}>
          <StaticImage
            src="../../images/toby-face.jpg"
            alt="PLACEHOLDER IMAGE"
            placeholder="blurred"
            className={styles.image}
            loading="eager"
          />
        </div>
        <div className={styles.logoDesktopWrapper}>
          <StaticImage
            src="../../images/logo-circular-accent.png"
            alt="PLACEHOLDER IMAGE"
            placeholder="blurred"
            className={styles.logoDesktop}
            loading="eager"
          />
        </div>
      </div>
      <div className={styles.textArea}>
        <div className={styles.logoMobileWrapper}>
          <StaticImage
            src="../../images/logo-circular-accent.png"
            alt="PLACEHOLDER IMAGE"
            placeholder="blurred"
            className={styles.logoMobile}
            loading="eager"
          />
        </div>
        {children}
      </div>
    </div>
  )
}