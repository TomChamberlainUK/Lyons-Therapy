import React from 'react';

import * as styles from './splitContainer.module.scss';

export function SplitContainer({ children }) {
  return <div className={styles.splitContainer}>{children}</div>
}

SplitContainer.Primary = function SplitContainerPrimary({ children }) {
  return <div className={styles.splitContainer__primary}>{children}</div>
}

SplitContainer.Secondary = function SplitContainerSecondary({ children }) {
  return <div className={styles.splitContainer__secondary}>{children}</div>
}