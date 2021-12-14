import React, { forwardRef } from 'react';

import * as styles from './card.module.scss';

export default forwardRef(function Card({ children, color, iconURL, iconAlt }, ref) {

  const cardClasses = `
    ${styles.card}
    ${color === 'primary' && styles.cardPrimary}
    ${color === 'secondary' && styles.cardSecondary}
    ${color === 'accent' && styles.cardAccent}
    ${color === 'dark' && styles.cardDark}
  `;
  const cardHeaderClasses = `
    ${styles.card__header}
    ${color === 'primary' && styles.card__headerPrimary}
    ${color === 'secondary' && styles.card__headerSecondary}
    ${color === 'accent' && styles.card__headerAccent}
    ${color === 'dark' && styles.card__headerDark}
  `;

  return (
    <div
      className={styles.cardWrapper}
      ref={ref}
    >
      <div className={cardClasses}>
        <div className={cardHeaderClasses}>
          <img
            src={iconURL}
            alt={iconAlt}
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