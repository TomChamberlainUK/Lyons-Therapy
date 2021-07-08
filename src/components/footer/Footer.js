import React from 'react';
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
        &copy; Lyons Therapy
      </div>
    </footer>
  )
}

export default Footer;