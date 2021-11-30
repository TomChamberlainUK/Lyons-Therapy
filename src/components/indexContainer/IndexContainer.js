import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Container } from 'components/container/Container';

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
        <Container>
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
        </Container>
      </div>
    </div>
  )
}