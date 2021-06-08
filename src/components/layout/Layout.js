import * as React from 'react';
import "@fontsource/material-icons";

import Header from '../header/Header';
import Footer from '../footer/Footer';

import './global.scss';
import * as styles from './layout.module.scss';

function Layout({ pageTitle, children }) {
  return (
    <div className={styles.root}>
      <title>{pageTitle}</title>
      <Header currentPage={pageTitle}/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;