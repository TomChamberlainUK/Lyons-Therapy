import * as React from 'react';
import "@fontsource/material-icons";

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import * as styles from './layout.module.scss';
import 'styles/global.scss';

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