import React, { useRef, forwardRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import * as styles from './parallaxContainer.module.scss';
import mapReactDescendants from 'utilities/map-react-descendants';
import makeRangeIterator from 'utilities/make-range-iterator';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  // markers: true
});

function ParallaxContainer({ images, children }) {

  // Refs for gsap transitions
  const containerRef = useRef(null);
  const imageFrameRef = useRef(null);
  const imageFrameInnerRef = useRef(null);
  const imageRefs = useRef([]);
  const sectionRefs = useRef([]);

  let sectionIt = makeRangeIterator(); // Iterator for counting section labels for gsap transitions

  useEffect(() => {
    const container = containerRef.current;
    const imageFrame = imageFrameRef.current;
    const imageFrameInner = imageFrameInnerRef.current;
    const images = imageRefs.current;
    const sections = sectionRefs.current;

    const startOffset = container.offsetTop;

    // Pin image frame
    gsap.to(imageFrame, {
      scrollTrigger: {
        trigger: container,
        pin: imageFrame,
        anticipatePin: 1,
        pinSpacing: false,
        start: `top ${startOffset}`,
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
      gsap.to(images[images.length - 1 - i], {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          toggleActions: 'play none reverse none',
          start: 'bottom center',
          end: 'bottom center'
        }
      });
    });
  }, []);

  return (
    <div
      className={styles.parallaxContainer}
      ref={containerRef}
    >
      <div ref={imageFrameRef} className={styles.imageFrame}>
        <div ref={imageFrameInnerRef} className={styles.imageFrame__inner}>
          {
            // Style images and add refs dynamically
            [...images].reverse() // reverse images array to compensate for z-index issues with positioning elements on top of each other
                       .map((image, i) => {
              return (
              <div
                key={i}
                ref={ref => { imageRefs.current[i] = ref }}
              >
                {React.cloneElement(image, { className: styles.image })}
              </div>
              )
            })
          }
        </div>
      </div>
      <div className={styles.textArea}>
        {
          // Map all descendants to dom and dynamically add refs to SectionLabels
          mapReactDescendants(children, child => {
            if (child.type === ParallaxContainer.SectionLabel) {
              const it = sectionIt.next().value; // increase iteration on each component match
              return React.cloneElement(child, {
                ref: ref => { sectionRefs.current[it] = ref }
              });
            }
            return child;
          })
        }
      </div>
    </div>
  )
}

ParallaxContainer.SectionLabel = forwardRef(function ParallaxSectionLabel(props, ref) {
  return <div ref={ref} />
});

export default ParallaxContainer;