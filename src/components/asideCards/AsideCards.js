import React, { useState, useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Card from 'components/card/Card';

import * as styles from './asideCards.module.scss';

// TODO: There's currently a bug where manually scrolling too fast can cause the scroll buttons on one side
//       to become unresponsive. This is due to the nature of intersection observers and how they only
//       track changes as often as the frame rate (assumingly using requestAnimationFrame under the hood).
//       Implement a fix for this, perhaps by updating scroll index when a button is pressed instead of just
//       when the intersection observer observes a change.


// Indicator component displaying cards shown and available
function Indicator({ display }) {
  const classes = `
    ${styles.indicator}
    ${display === 'dim' && styles.indicatorDimmed}
    ${display === 'hide' && styles.indicatorHidden}
  `;
  return <div className={classes} />;
}

export default function AsideCards() {

  // DOM refs for cards and their container
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // Index of card to scroll to - when this changes the browser will scroll to the corresponding card
  const [scrollIndex, setScrollIndex] = useState(null);

  // Array to show which cards are visible on screen
  const [visibleCards, setVisibleCards] = useState([]);

  // First and last index of cards shown
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // Build card data
  // TODO: add alts to each image
  const cardContents = [
    {
      color: 'primary',
      icon: <StaticImage
        src="../../images/icon-heads.jpg"
        alt="PLACEHOLDER"
        className={styles.cardIcon}
      />,
      text: 'We understand our existence as individuals within and through our relationships with others.'
    },
    {
      color: 'accent',
      icon: <StaticImage
        src="../../images/icon-particles.jpg"
        alt="PLACEHOLDER"
        className={styles.cardIcon}
      />,
      text: 'Everyone\'s life is unique. There are as many ways to suffer as there are to heal.'
    },
    {
      color: 'secondary',
      icon: <StaticImage
        src="../../images/icon-star.jpg"
        alt="PLACEHOLDER"
        className={styles.cardIcon}
      />,
      text: 'How can we know how someone else experiences the world without hearing it from them first?'
    },
    {
      color: 'dark',
      icon: <StaticImage
        src="../../images/icon-stairs.jpg"
        alt="PLACEHOLDER"
        className={styles.cardIcon}
      />,
      text: 'We all struggle at times with the ultimate concerns of life and death.'
    },
    {
      color: 'primary',
      icon: <StaticImage
        src="../../images/icon-speech.jpg"
        alt="PLACEHOLDER"
        className={styles.cardIcon}
      />,
      text: 'Positive therapeutic relationships are built on a foundation of empathy and trust.'
    },
    {
      color: 'accent',
      icon: <StaticImage
        src="../../images/icon-waves.jpg"
        alt="PLACEHOLDER"
        className={styles.cardIcon}
      />,
      text: 'It\'s important to normalise and accept distress in a world which often tries to diagnose and medicalise human suffering'
    },
    {
      color: 'secondary',
      icon: <StaticImage
        src="../../images/icon-orbit.jpg"
        alt="PLACEHOLDER"
        className={styles.cardIcon}
      />,
      text: 'Our mental health is intrinsically linked to our physical health, our relational world, our history and our beliefs.'
    },
    {
      color: 'dark',
      icon: <StaticImage
        src="../../images/icon-growth.jpg"
        alt="PLACEHOLDER"
        className={styles.cardIcon}
      />,
      text: 'With obstacles removed, each of us have a propensity to move towards healing, change and growth.'
    },
    {
      color: 'dark',
      icon: <StaticImage
        src="../../images/icon-sunset.jpg"
        alt="PLACEHOLDER"
        className={styles.cardIcon}
      />,
      text: 'By facing our struggles rather than trying to avoid or eliminate them, we can move forwards with our lives.'
    }
  ]

  // Generate card components from data
  const cards = cardContents.map(({color, icon, text}, i) => {
    return (
      <Card
        color={color}
        icon={icon}
        key={i}
        ref={ref => cardRefs.current[i] = ref}
      >
        {text}
      </Card>
    );
  });

  // Generate indicators
  const indicators = [
    <Indicator
      key={'pre'}
      display={
        visibleCards[0] === false
          ? 'dim'
          : 'hide'
      }
    />,
    <Indicator key={0} />,
    <Indicator key={1} />,
    <Indicator key={2} />,
    <Indicator
      key={'post'}
      display={
        visibleCards[visibleCards.length - 1] === false
          ? 'dim'
          : 'hide'
      }
    />
  ];
  
  // Scroll to next card to left - loop if necessary
  function scrollLeft() {
    if (minIndex === 0) {
      setScrollIndex(cardRefs.current.length - 1);
    } else {
      setScrollIndex(minIndex - 1);
    }
  }

  // Scroll to next card to right - loop if necessary
  function scrollRight() {
    if (maxIndex === cardRefs.current.length - 1) {
      setScrollIndex(0);
    } else {
      setScrollIndex(maxIndex + 1);
    }
  }


  // Scroll to card when scroll index is updated
  useEffect(() => {
    if (scrollIndex === null) return;
    cardRefs.current[scrollIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    });
  }, [scrollIndex]);


  // Track what cards are currently visible in their container
  useEffect(() => {

    // Define intersection observer options
    const options = {
      root: containerRef.current,
      rootMargin: '0px',
      threshold: 0.8 // intersection observer triggers once every frame, setting a value just short of 1 fixes issues with quick scroll speeds and poor frame rates
    }

    // Define a map to keep track of what cards are currently visible in container, default all values to false
    const intersectionsMap = new Array(cardRefs.current.length).fill(false);

    // Define an intersection observer to track cards entering and leaving the viewport
    const observer = new IntersectionObserver((entries, observer) => {

      // Init min and max values, these will be the indices of the first and last cards shown
      let min = null;
      let max = null;

      // Loop through entries that have changed visibility
      for (const entry of entries) {

        // Get card nth child index
        const index = [...observer.root.children].indexOf(entry.target);
        if (index === -1) continue;

        // Update map based on whether entry is visible
        if (entry.isIntersecting) {
          intersectionsMap[index] = true;
        } else {
          intersectionsMap[index] = false;
        }

      }

      // Loop through intersections and update min and max indices of shown cards
      intersectionsMap.forEach((shown, i) => {
        if (shown && (min === null || min > i)) min = i;
        if (shown && (max === null || max < i)) max = i;
      });

      // Update state
      if (min !== null) setMinIndex(min);
      if (max !== null) setMaxIndex(max);

      setVisibleCards([...intersectionsMap]);

    }, options);
  
    // Add all cards to be observed
    for (const card of cardRefs.current) {
      observer.observe(card);
    }

    // Stop observing all cards on unmount
    return () => {
      observer.disconnect();
    }

  }, [cardRefs]);

  return (
    <aside className={styles.asideCards}>

      <div ref={containerRef} className={styles.asideCards__inner}>
        {cards}
      </div>

      <div className={styles.asideCards__controls}>

        <button className={styles.button} onClick={scrollLeft}>
          <i className={"material-icons"}>
            chevron_left
          </i>
        </button>

        {indicators}

        <button className={styles.button} onClick={scrollRight}>
          <i className={"material-icons"}>
            chevron_right
          </i>
        </button>

      </div>

    </aside>
  );
}