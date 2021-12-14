import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { SplitContainer } from 'components/splitContainer/SplitContainer';
import { Container } from 'components/container/Container';

import logoUrl from 'images/logo-circle.svg';

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
          <img
            src={logoUrl}
            alt="Lyons Therapy Logo"
            className={styles.logoDesktop}
          />
        </div>
      }
    >
      <Container>
        <img
          src={logoUrl}
          alt="Lyons Therapy Logo"
          className={styles.logoMobile}
        />
        {children}
      </Container>
    </SplitContainer>
  );
}

export default IndexContainer;