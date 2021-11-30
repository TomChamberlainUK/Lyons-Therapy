import React, { useEffect, useRef } from 'react';
import { navigate } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from 'components/layout/Layout';
import IndexContainer from 'components/indexContainer/IndexContainer';
import { TextWrapper, Title, Subtitle, Heading, Paragraph, Seperator } from 'components/typography/Typography';
import { Button } from 'components/button/Button';

function IndexPage() {

  const textRefs = useRef([]);

  // Better than pushing to textRef array? needs research
  let textRefCount = 0;
  function getNextTextRefIndex() {
    textRefCount++;
    return textRefCount - 1;
  }

  useEffect(() => {

    gsap.set(textRefs.current, { opacity: 0, y: 16 });
    ScrollTrigger.batch(textRefs.current, {
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

    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(textRefs.current, { y: 0 }));

  }, [textRefs]);

  return (
    <Layout pageTitle="Home">
      <IndexContainer>
          <TextWrapper>
            <Title ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Toby Lyons</Title>
            <Subtitle ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >BA, PG Cert, PG Dip, MBACP</Subtitle>
            <Seperator isBold={true} />
            <Heading ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Counselling and Psychotherapy</Heading>
            <Paragraph ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida.</Paragraph>
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