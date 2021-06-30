import React from 'react';

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
    Title: function Title({ children }) {
      return <h1 className={styles.title}>{children}</h1>
    },

    Subtitle: function Subtitle({ children }) {
      return <p className={styles.subtitle}>{children}</p>
    },

    Heading: function Heading({ children }) {
      return <h2 className={styles.heading}>{children}</h2>
    },
    
    Subheading: function Subheading({ children }) {
      return <h3 className={styles.subheading}>{children}</h3>
    },
    
    Paragraph: function Paragraph({ children }) {
      return <p className={styles.paragraph}>{children}</p>
    },
    
    Note: function Note({ children }) {
      return <p><small className={styles.note}>{children}</small></p>
    },
    
    Seperator: function Seperator({ isBold }) {
      return <hr className={`${styles.seperator} ${isBold && styles.seperatorIsBold}`}/>
    },
    
    List: function List({ children }) {
      return <ul className={styles.list}>{children}</ul>
    },
    
    ListItem: function ListItem({ children }) {
      return <li className={styles.list__item}>{children}</li>
    }
  }
}