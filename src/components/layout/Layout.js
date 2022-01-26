import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "@fontsource/material-icons";
import "@fontsource/libre-baskerville";
import '@fontsource/montserrat/700.css';
import '@fontsource/hind-madurai';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import AsideCards from 'components/asideCards/AsideCards';

import * as styles from './layout.module.scss';
import 'styles/global.scss';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  // markers: true
});

function Layout({ children, pageTitle }) {

  const rootRef = useRef(null);

  return (
    <div ref={rootRef} className={styles.root}>
      <Helmet
        htmlAttributes={{
          lang: 'en'
        }}
      >
        <meta charSet="utf-8" />
        <meta name="description" content="From anxiety or depression to stress management and relationship difficulties — Therapy has the potential to help everyone differently. Arrange a free consultation now." />
        <title>Lyons Therapy</title>
      </Helmet>
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