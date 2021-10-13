import React, { useRef } from 'react';
import "@fontsource/material-icons";
import "@fontsource/libre-baskerville";

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import AsideCards from 'components/asideCards/AsideCards';

import * as styles from './layout.module.scss';
import 'styles/global.scss';

function Layout({ children, pageTitle }) {

  const rootRef = useRef(null);

  return (
    <div ref={rootRef} className={styles.root}>
      <title>{pageTitle}</title>
      <Header currentPage={pageTitle}/>
      <main className={styles.main}>
        {children}
      </main>
      <AsideCards />
      <Footer />
    </div>
  );
}

export default Layout;