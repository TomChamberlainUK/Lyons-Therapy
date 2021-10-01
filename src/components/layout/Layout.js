import * as React from 'react';
import "@fontsource/material-icons";
import "@fontsource/libre-baskerville";

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Card from 'components/card/Card';
import * as styles from './layout.module.scss';
import 'styles/global.scss';

function calculateScrollBarWidth() {
  document.documentElement.style.setProperty('--size-scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + 'px');
}
window.addEventListener('resize', calculateScrollBarWidth, false);
document.addEventListener('DOMContentLoaded', calculateScrollBarWidth, false);
document.addEventListener('load', calculateScrollBarWidth);

function Layout({ children, pageTitle }) {
  return (
    <div className={styles.root}>
      <title>{pageTitle}</title>
      <Header currentPage={pageTitle}/>
      <main className={styles.main}>
        {children}
      </main>
      <aside className={styles.asideCards}>
        <Card>With obstacles removed, each of us have a propensity to move towards healing, change and growth.</Card>
        <Card>With obstacles removed, each of us have a propensity to move towards healing, change and growth.</Card>
        <Card>With obstacles removed, each of us have a propensity to move towards healing, change and growth.</Card>
      </aside>
      <Footer />
    </div>
  );
}

export default Layout;