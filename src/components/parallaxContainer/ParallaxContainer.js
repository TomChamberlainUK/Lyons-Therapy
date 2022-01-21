import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import { SplitContainer } from 'components/splitContainer/SplitContainer';

import * as styles from './parallaxContainer.module.scss';

export function ParallaxContainer({ children, images = [] }) {

  const containerRef = useRef(null);

  useEffect(() => {

    // Get relevant DOM elements
    const container = containerRef.current;
    const containerDescendants = gsap.utils.selector(containerRef);
    const imageFrame = containerDescendants('.gsap-parallax-image-frame');
    const imageFrameInner = containerDescendants('.gsap-parallax-image-frame-inner');
    const images = containerDescendants('.gsap-parallax-image');
    const sections = containerDescendants('.gsap-parallax-section-label');

    // Handle errors
    if (!images.length) console.warn('No images provided for Parallax Container');
    if (sections.length < images.length - 1) console.warn('Not enough section labels provided for Parallax Container to reveal all images');

    // Pin image frame
    const pinImageAnimation = gsap.to(imageFrame, {
      scrollTrigger: {
        trigger: container,
        pin: imageFrame,
        anticipatePin: 1,
        pinSpacing: false,
        start: () => `top ${container.offsetTop}`,
        end: 'bottom bottom'
      }
    });

    // Slowly scroll image on scrub/scroll
    const scrubImageAnimation = gsap.to(imageFrameInner, {
      yPercent: -9, // with image height at 110% this allows the extra 10% to be scrolled
      scrollTrigger: {
        trigger: container,
        scrub: true,
        end: () => `bottom ${container.offsetTop}`
      }
    });

    // Fade images as user scrolls through sections
    const Animation = sections.map((section, i) => {
      return gsap.to(images[i], {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          toggleActions: 'play none reverse none',
          start: 'bottom center',
          end: 'bottom center'
        }
      });
    });

    // Cleanup gsap functions on unmount to prevent memory leaks
    return () => {
      pinImageAnimation.scrollTrigger.kill();
      scrubImageAnimation.scrollTrigger.kill();
      Animation.forEach(fadeImageAnimation => fadeImageAnimation.scrollTrigger.kill());
    }

  }, [containerRef]);

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