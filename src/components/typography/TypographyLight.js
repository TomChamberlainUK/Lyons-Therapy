import React from 'react';

import * as styles from './typographyLight.module.scss';

export function Title({ children }) {
  return <h1 className={styles.title}>{children}</h1>
}

export function Subtitle({ children }) {
  return <p className={styles.subtitle}>{children}</p>
}

export function Heading({ children }) {
  return <h2 className={styles.heading}>{children}</h2>
}

export function Subheading({ children }) {
  return <h3 className={styles.subheading}>{children}</h3>
}

export function Paragraph({ children }) {
  return <p className={styles.paragraph}>{children}</p>
}

export function Note({ children }) {
  return <p className={styles.note}><small>{children}</small></p>
}

export function Seperator({ isBold }) {
  return <hr className={`${styles.seperator} ${isBold && styles.seperatorIsBold}`}/>
}

export function List({ children }) {
  return <ul className={styles.list}>{children}</ul>
}

List.Item = function ListItem({ children }) {
  return <li className={styles.list__item}>{children}</li>
}