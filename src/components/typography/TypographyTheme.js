import React, { forwardRef } from 'react';

import * as stylesDark from './typographyDark.module.scss';
import * as stylesLight from './typographyLight.module.scss';

export default function TypographyTheme(theme) {

  let styles;
  switch (theme) {
    case 'light':
      styles = stylesLight;
      break;
    case 'dark':
    default:
      styles = stylesDark;
  }

  return {
    Title: forwardRef(function Title({ children }, ref) {
      return (
        <h1
          ref={ref}
          className={styles.title}
        >
          {children}
        </h1>
      );
    }),

    Subtitle: forwardRef(function Subtitle({ children }, ref) {
      return (
        <p
          ref={ref}
          className={styles.subtitle}
        >
          {children}
        </p>
      );
    }),

    Heading: forwardRef(function Heading({ children }, ref) {
      return (
        <h2
          ref={ref}
          className={styles.heading}
        >
          {children}
        </h2>
      );
    }),
    
    Subheading: forwardRef(function Subheading({ children }, ref) {
      return (
        <h3
          ref={ref}
          className={styles.subheading}
        >
          {children}
        </h3>
      );
    }),
    
    Paragraph: forwardRef(function Paragraph({ children }, ref) {
      return (
        <p
          ref={ref}
          className={styles.paragraph}
        >
          {children}
        </p>
      );
    }),
    
    Note: forwardRef(function Note({ children }, ref) {
      return (
        <p ref={ref} >
          <small className={styles.note} >
            {children}
          </small>
        </p>
      );
    }),
    
    Seperator: forwardRef(function Seperator({ isBold }, ref) {
      return (
        <hr
          ref={ref}
          className={`
            ${styles.seperator}
            ${isBold && styles.seperatorIsBold}
          `}
        />
      );
    }),
    
    List: forwardRef(function List({ children }, ref) {
      return (
        <ul
          ref={ref}
          className={styles.list}
        >
          {children}
        </ul>
      );
    }),
    
    ListItem: forwardRef(function ListItem({ children }, ref) {
      return (
        <li
          ref={ref}
          className={styles.list__item}
        >
          {children}
        </li>
      );
    })
  }
}