import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { SplitContainer } from 'components/splitContainer/SplitContainer';
import { Container } from 'components/container/Container';

import * as styles from './indexContainer.module.scss';

export function IndexContainer({ children }) {

  return (
    <SplitContainer
      columnReverse={true}
      subContent={
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
      }
    >
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
    </SplitContainer>
  );
}

export default IndexContainer;