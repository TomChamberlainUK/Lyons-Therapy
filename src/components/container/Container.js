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

export default Container;