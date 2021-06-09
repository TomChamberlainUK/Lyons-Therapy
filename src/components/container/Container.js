import React from 'react';

import * as styles from './container.module.scss';

export function Container({ children }) {
  return <div className={styles.container}>{children}</div>
}