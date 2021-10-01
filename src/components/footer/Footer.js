import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>LYONS<br />THERAPY</div>
      <StaticImage
        src="../../images/bacp_badge_SAMPLE.jpg"
        alt="SAMPLE BADGE"
        objectFit="contain"
        className={styles.bacpBadge}
      />
      <div className={styles.legalStrip}>
        <span>&copy; Lyons Therapy</span>
        <span>
          <Link to="#" style={{color: 'rgba(255,255,255,1'}}>Privacy Policy</Link> <Link to="#" style={{color: 'rgba(255,255,255,1'}}>Terms of Use</Link> <Link to="#" style={{color: 'rgba(255,255,255,1'}}>Cookies</Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer;