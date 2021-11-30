import React, { forwardRef } from 'react';

import * as styles from './splitContainer.module.scss';

export const SplitContainer = forwardRef(function SplitContainer({ children, subContent, columnReverse }, ref) {
  return (
    <div
      className={`
        ${styles.splitContainer}
        ${columnReverse && styles.splitContainerColumnReverse}
      `}
      ref={ref}
    >
      <div className={styles.splitContainer__primary}>
        {children}
      </div>
      <div className={styles.splitContainer__secondary}>
        {subContent}
      </div>
    </div>
  );
});

export default SplitContainer;