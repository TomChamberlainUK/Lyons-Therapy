import React from 'react';

import * as styles from './button.module.scss';

export function ButtonSet({ children }) {
  return <div className={styles.buttonSet}>{children}</div>
}

export function Button({ children, isPrimary, icon, onClick }) {

  function handleClick(event) {
    event.preventDefault();
    if (onClick) onClick();
  }

  return (
    <button
      className={`${styles.button} ${!isPrimary && styles.buttonSecondary}`}
      onClick={handleClick}
    >
      {icon && <i className={`material-icons ${styles.button__icon}`}>{icon}</i>}
      {children}
    </button>
  );
}