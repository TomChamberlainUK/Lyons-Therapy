import React, { useEffect, useRef } from 'react';
import { navigate } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from 'components/layout/Layout';
import IndexContainer from 'components/indexContainer/IndexContainer';
import { TextWrapper, Title, Subtitle, Heading, Paragraph, Seperator } from 'components/typography/Typography';
import { Button } from 'components/button/Button';

function IndexPage() {

  const textWrapperRef = useRef();
  const textWrapperDescendants = gsap.utils.selector(textWrapperRef);

  useEffect(() => {
    
    const scrollInElements = textWrapperDescendants('.gsap-scroll-in');

    gsap.set(scrollInElements, { opacity: 0, y: 16 });

    const triggers = ScrollTrigger.batch(scrollInElements, {
      interval: 0.1,
      batchMax: 5,
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        overwrite: true
      }),
      onLeave: batch => gsap.set(batch, {
        opacity: 0,
        y: -16,
        overwrite: true
      }),
      onEnterBack: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        overwrite: true
      }),
      onLeaveBack: batch => gsap.set(batch, {
        opacity: 0,
        y: 16,
        overwrite: true
      })
    });

    return () => triggers.forEach(trigger => trigger.kill());

  }, [textWrapperDescendants]);

  return (
    <Layout pageTitle="Home">
      <IndexContainer>
          <TextWrapper ref={textWrapperRef}>
            <Title className={'gsap-scroll-in'} >Toby Lyons</Title>
            <Subtitle className={'gsap-scroll-in'} >BA, PG Cert, PG Dip, MBACP</Subtitle>
            <Seperator isBold={true} />
            <Heading className={'gsap-scroll-in'} >Counselling and Psychotherapy</Heading>
            <Paragraph className={'gsap-scroll-in'} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida.</Paragraph>
            <Seperator />
            <Button
              onClick={() => navigate('/contact')}
              icon={'markunread'}
              isPrimary={true}
            >
              Arrange a Free Consultation
            </Button>
          </TextWrapper>
      </IndexContainer>
    </Layout>
  );
}

export default IndexPage;