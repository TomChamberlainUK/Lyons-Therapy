import * as React from 'react';
import { Link } from 'gatsby';

import Navigation from 'components/navigation/Navigation';
import logoUrl from 'images/logo-horizontal.svg';
import * as styles from './header.module.scss';

function Header({ currentPage }) {

  const [navIsOpen, setNavIsOpen] = React.useState(false);
  
  return (
    <header className={styles.header}>
      <button className={styles.btn} onClick={() => setNavIsOpen(!navIsOpen)}>
        <i className={styles.btn__icon + " material-icons"}>
          menu
        </i>
      </button>
      <Link to="/" className={styles.logo}>
        <img
          src={logoUrl}
          alt="Lyons Therapy Logo"
          className={styles.logo__img}
        />
      </Link>
      <Navigation
        isOpen={navIsOpen}
        currentPage={currentPage}
      />
    </header>
  );
}

export default Header;