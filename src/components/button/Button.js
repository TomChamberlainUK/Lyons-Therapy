import React from 'react';

import * as styles from './button.module.scss';

export function ButtonSet({ children }) {
  return <div className={styles.buttonSet}>{children}</div>
}

export function Button({ children, type = "button", onClick, icon, isPrimary }) {

  function handleClick(event) {
    if (onClick) onClick(event);
  }

  return (
    <button
      className={`${styles.button} ${!isPrimary && styles.buttonSecondary}`}
      onClick={handleClick}
      type={type}
    >
      {icon && <i className={`material-icons ${styles.button__icon}`}>{icon}</i>}
      {children}
    </button>
  );
}