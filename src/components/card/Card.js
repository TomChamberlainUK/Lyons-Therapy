import React, { forwardRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './card.module.scss';

export default forwardRef(function Card({ children }, ref) {
  return (
    <div
      className={styles.cardWrapper}
      ref={ref}
    >
      <div className={styles.card}>
        <div className={styles.card__header}>
          <StaticImage
            src="../../images/star-icon.jpg"
            alt="PLACEHOLDER ICON"
            className={styles.card__icon}
          />
        </div>
        <div className={styles.card__body}>
          {children}
        </div>
      </div>
    </div>
  )
});