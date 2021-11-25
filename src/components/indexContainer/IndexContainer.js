import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './indexContainer.module.scss';

export default function IndexContainer({ children }) {

  return (
    <div className={styles.indexContainer}>
      <div className={styles.imageFrame}>
        <StaticImage
          src="../../images/toby-face.jpg"
          alt="PLACEHOLDER IMAGE"
          placeholder="blurred"
          className={styles.image}
          loading="eager"
        />
        <StaticImage
          src="../../images/logo-circular-accent.png"
          alt="PLACEHOLDER IMAGE"
          placeholder="blurred"
          className={styles.logoDesktop}
          loading="eager"
        />
      </div>
      <div className={styles.textArea}>
        <StaticImage
          src="../../images/logo-circular-accent.png"
          alt="PLACEHOLDER IMAGE"
          placeholder="blurred"
          className={styles.logoMobile}
          loading="eager"
        />
        {children}
      </div>
    </div>
  )
}