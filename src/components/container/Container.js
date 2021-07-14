import React from 'react';

import * as styles from './container.module.scss';

export function Container({ children, fullHeight, backgroundColor }) {
  const classes = `
    ${styles.container}
    ${fullHeight && styles.containerFullHeight}
    ${backgroundColor === 'accent' && styles.containerColorAccent}
  `;

  return <div className={classes}>{children}</div>
}

export function SplitContainer({ children, subContent }) {
  return (
    <div className={styles.splitContainer}>
      <div className={styles.splitContainer__secondary}>
        {subContent}
      </div>
      <div className={styles.splitContainer__primary}>
        {children}
      </div>
    </div>
  );
}

export function TextContainer({ children }) {
  return <div className={styles.textContainer}>{children}</div>
}