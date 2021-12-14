import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import logoURL from 'images/logo-circle-white.svg';

import * as styles from './footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={styles.footer__main}>
        <img
          src={logoURL}
          alt="Lyons Therapy Logo"
          className={styles.logo}
        />
        <div className={`${styles.footer__textWrapper} ${styles.sitemap}`}>
          <h1 className={styles.footer__heading}>Sitemap</h1>
          <nav className={styles.footer__navigation}>
            <Link to="/" className={styles.footer__link}>Home</Link>
            <Link to="/about" className={styles.footer__link}>About</Link>
            <Link to="/services" className={styles.footer__link}>Services</Link>
            <Link to="/contact" className={styles.footer__link}>Contact</Link>
            <Link to="/privacy-policy" className={styles.footer__link}>Privacy Policy</Link>
          </nav>
        </div>
        <div className={`${styles.footer__textWrapper} ${styles.accreditation}`}>
          <h1 className={styles.footer__heading}>Accreditation</h1>
          <p className={styles.footer__paragraph}>Toby Lyons is a Registered Member of BACP and is a Registered Psychotherapist and Counsellor. Please see <Link to="#" className={styles.footer__link}>BACP</Link> for more details.</p>
        </div>
        <StaticImage
          src="../../images/bacp_badge.png"
          alt="SAMPLE BADGE"
          objectFit="contain"
          className={styles.bacpBadge}
        />
      </div>
      <div className={styles.footer__sub}>
        <div className={styles.legalStrip}>
          <p className={styles.footer__paragraph}>&copy; Lyons Therapy 2021</p>
          <p className={styles.footer__paragraph}>
            Website Developed by <a href="http://tomchamberlain.co.uk" target="_blank" rel="noreferrer" className={styles.footer__link}>Tom Chamberlain</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;