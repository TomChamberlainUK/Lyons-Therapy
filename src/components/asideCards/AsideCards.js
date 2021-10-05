import React, { useState, useEffect, useRef } from 'react';

import Card from 'components/card/Card';

import * as styles from './asideCards.module.scss';


export default function AsideCards() {

  // Index of card to scroll to
  const [scrollIndex, setScrollIndex] = useState(null);
  // First and last index of cards shown
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

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
      threshold: 1
    }

    // Define a map to keep track of what cards are currently visible in container, default all values to false
    const intersectionsMap = new Array(containerRef.current.children.length).fill(false);

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

    }, options);
  
    // Add all cards to be observed
    for (const card of cardRefs.current) {
      observer.observe(card);
    }

  }, [cardRefs]);

  return (
    <aside className={styles.asideCards}>

      <div ref={containerRef} className={styles.asideCards__inner}>
        {/* Automate the cards and their indices below */}
        <Card ref={ref => cardRefs.current[0] = ref}>With obstacles removed, each of us have a propensity to move towards healing, change and growth.</Card>
        <Card ref={ref => cardRefs.current[1] = ref}>With obstacles removed, each of us have a propensity to move towards healing, change and growth.</Card>
        <Card ref={ref => cardRefs.current[2] = ref}>With obstacles removed, each of us have a propensity to move towards healing, change and growth.</Card>
        <Card ref={ref => cardRefs.current[3] = ref}>With obstacles removed, each of us have a propensity to move towards healing, change and growth.</Card>
        <Card ref={ref => cardRefs.current[4] = ref}>With obstacles removed, each of us have a propensity to move towards healing, change and growth.</Card>
        <Card ref={ref => cardRefs.current[5] = ref}>With obstacles removed, each of us have a propensity to move towards healing, change and growth.</Card>
      </div>

      <div className={styles.asideCards__controls}>

        <button onClick={scrollLeft}>
          <i className={"material-icons"}>
            chevron_left
          </i>
        </button>

        <button onClick={scrollRight}>
          <i className={"material-icons"}>
            chevron_right
          </i>
        </button>

      </div>

    </aside>
  );
}