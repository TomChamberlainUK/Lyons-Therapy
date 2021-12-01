import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import { SplitContainer } from 'components/splitContainer/SplitContainer';

import * as styles from './parallaxContainer.module.scss';

export function ParallaxContainer({ children, images = [] }) {

  const containerRef = useRef(null);
  const containerDescendants = gsap.utils.selector(containerRef);

  useEffect(() => {
    const container = containerRef.current;
    const imageFrame = containerDescendants('.gsap-parallax-image-frame');
    const imageFrameInner = containerDescendants('.gsap-parallax-image-frame-inner');
    const images = containerDescendants('.gsap-parallax-image');
    const sections = containerDescendants('.gsap-parallax-section-label');

    if (!images.length) console.warn('No images provided for Parallax Container');
    if (sections.length < images.length - 1) console.warn('Not enough section labels provided for Parallax Container to reveal all images');

    // Pin image frame
    gsap.to(imageFrame, {
      scrollTrigger: {
        trigger: container,
        pin: imageFrame,
        anticipatePin: 1,
        pinSpacing: false,
        start: `top ${container.offsetTop}`,
        end: 'bottom bottom'
      }
    });

    // Slowly scroll image on scrub/scroll
    gsap.to(imageFrameInner, {
      yPercent: -16.7, // with image height at 120% this allows the extra 20% to be scrolled
      scrollTrigger: {
        trigger: container,
        scrub: true
      }
    });

    // Fade images as user scrolls through sections
    sections.forEach((section, i) => {
      gsap.to(images[i], {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          toggleActions: 'play none reverse none',
          start: 'bottom center',
          end: 'bottom center'
        }
      });
    });

  }, [containerDescendants]);

  return (
    <SplitContainer
      ref={containerRef}
      columnReverse={true}
      subContent={
        <div className={`${styles.imageFrame} gsap-parallax-image-frame`}>
         <div className={`${styles.imageFrame__inner} gsap-parallax-image-frame-inner`}>
           {
            // Style images and add gsap classes
            images.map((image, i) => {
              return (
                <div
                  key={i}
                  style={{ zIndex: images.length - i }} // Ensure images are displayed in DOM order, ie. earlier DOM elements display over later elements
                  className={`${styles.imageWrapper} gsap-parallax-image`}
                >
                  {React.cloneElement(image, { className: styles.image })}
                </div>
              );
            })
          }
        </div>
      </div>
      }
    >
      {children}
    </SplitContainer>
  )
}

ParallaxContainer.SectionLabel = function ParallaxSectionLabel() {
  return <div className={'gsap-parallax-section-label'} />
};

export default ParallaxContainer;