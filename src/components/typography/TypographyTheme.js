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
    TextWrapper: forwardRef(function TextWrapper({ children }, ref) {
      return (
        <div
          ref={ref}
          className={styles.textWrapper}
        >
          {children}
        </div>
      );
    }),
    Title: forwardRef(function Title({ children, className }, ref) {
      return (
        <h1
          ref={ref}
          className={`${styles.title} ${className && className}`}
        >
          {children}
        </h1>
      );
    }),

    Subtitle: forwardRef(function Subtitle({ children, className }, ref) {
      return (
        <p
          ref={ref}
          className={`${styles.subtitle} ${className && className}`}
        >
          {children}
        </p>
      );
    }),

    Heading: forwardRef(function Heading({ children, className }, ref) {
      return (
        <h2
          ref={ref}
          className={`${styles.heading} ${className && className}`}
        >
          {children}
        </h2>
      );
    }),
    
    Subheading: forwardRef(function Subheading({ children, className }, ref) {
      return (
        <h3
          ref={ref}
          className={`${styles.subheading} ${className && className}`}
        >
          {children}
        </h3>
      );
    }),
    
    Paragraph: forwardRef(function Paragraph({ children, className }, ref) {
      return (
        <p
          ref={ref}
          className={`${styles.paragraph} ${className && className}`}
        >
          {children}
        </p>
      );
    }),
    
    Note: forwardRef(function Note({ children, className }, ref) {
      return (
        <p ref={ref} >
          <small className={`${styles.note} ${className && className}`}>
            {children}
          </small>
        </p>
      );
    }),
    
    Seperator: function Seperator({ isBold }) {
      return (
        <hr className={`
          ${styles.seperator}
          ${isBold && styles.seperatorIsBold}
        `} />
      );
    },
    
    List: forwardRef(function List({ children, className }, ref) {
      return (
        <ul
          ref={ref}
          className={`${styles.list} ${className && className}`}
        >
          {children}
        </ul>
      );
    }),
    
    ListItem: forwardRef(function ListItem({ children, className }, ref) {
      return (
        <li
          ref={ref}
          className={`${styles.list__item} ${className && className}`}
        >
          {children}
        </li>
      );
    }),

    OrderedList: forwardRef(function List({ children, className }, ref) {
      return (
        <ol
          ref={ref}
          className={`${styles.orderedList} ${className && className}`}
        >
          {children}
        </ol>
      );
    }),

    OrderedListHeading: forwardRef(function ListItem({ children, className }, ref) {
      return (
        <li
          ref={ref}
          className={`${styles.orderedList__heading} ${className && className}`}
        >
          {children}
        </li>
      );
    }),

    OrderedListItem: forwardRef(function ListItem({ children, className }, ref) {
      return (
        <li
          ref={ref}
          className={`${styles.orderedList__item} ${className && className}`}
        >
          {children}
        </li>
      );
    }),
  }
}