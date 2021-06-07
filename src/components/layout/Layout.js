import * as React from 'react';
import "@fontsource/material-icons";
import './global.scss';
import Header from '../header/Header';
import * as styles from './layout.module.scss';

function Layout({ pageTitle, currentPage, children }) {
  return (
    <div className={styles.root}>
      <title>{pageTitle}</title>
      <Header currentPage={currentPage}/>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}

export default Layout;