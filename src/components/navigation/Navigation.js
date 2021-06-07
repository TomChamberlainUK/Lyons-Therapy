import * as React from 'react';
import { Link } from 'gatsby';

import * as styles from './navigation.module.scss';

const linksList = [
  { url: '/', text: 'Home' },
  { url: '/about', text: 'About' },
  { url: '/services', text: 'Services' },
  { url: '/contact', text: 'Contact' }
];

function Navigation({ isOpen, currentPage }) {
  return (
    <nav className={`
      ${styles.nav}
      ${isOpen ? styles.navOpen : ''}
    `}>
        {
          linksList.map(({ url, text }, index) => (
            <Link
              to={url}
              key={index}
              className={`
                ${styles.nav__link} 
                ${currentPage === text ? styles.nav__linkActive : ''}
              `}
            >
              {text}
            </Link>
          ))
        }
      </nav>
  );
}

export default Navigation;