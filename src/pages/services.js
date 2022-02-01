import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from 'components/layout/Layout';
import ParallaxContainer from 'components/parallaxContainer/ParallaxContainer';
import { Container } from 'components/container/Container';
import { TextWrapper, Title, Subtitle, Heading, Subheading, Paragraph, Seperator } from 'components/typography/Typography';
import SEO from 'components/SEO/SEO';

function ServicesPage() {

  const textWrapperRef = useRef();
  const textWrapperDescendants = gsap.utils.selector(textWrapperRef);

  useEffect(() => {
    
    const scrollInElements = textWrapperDescendants('.gsap-scroll-in');

    gsap.set(scrollInElements, { opacity: 0, y: 16 });

    const triggers = ScrollTrigger.batch(scrollInElements, {
      interval: 0.1,
      batchMax: 10,
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
    <Layout pageTitle="Services">
      <SEO
        title="Services | Lyons Therapy"
        description="I provide therapy services for individuals and workplaces in either short-term or long-term sessions tailored to your needs. Find something that suits you now."
      />
      <ParallaxContainer images={
        [
          <StaticImage
            src="../images/water.jpg"
            alt="Choppy blue waves of the sea that fade into the horizon"
            placeholder="blurred"
            loading="eager"
          />,
          <StaticImage
            src="../images/meadows_sunset.jpg"
            alt="Rolling hills of grass fields and trees, painted golden by the sunset"
            placeholder="blurred"
            imgStyle={{
              objectPosition: 'left'
            }}
          />
        ]
      }>
        <Container>
          <TextWrapper ref={textWrapperRef}>
            <Title className={'gsap-scroll-in'} >
              Services
            </Title>
            <Subtitle className={'gsap-scroll-in'} >
              What’s on offer?
            </Subtitle>
            <Seperator isBold={true} />
            <Heading className={'gsap-scroll-in'} >
              Therapy
            </Heading>
            <Subheading className={'gsap-scroll-in'} >
              Short Term or Goal Orientated
            </Subheading>
            <Paragraph className={'gsap-scroll-in'} >
              There are myriad reasons as to why you might prefer our sessions to be short term and there are many ways that we can work together to get you through a particular tough patch or help move you towards a specific agreed upon goal.
            </Paragraph>
            <Subheading className={'gsap-scroll-in'} >
              Long Term or Open Ended
            </Subheading>
            <Paragraph className={'gsap-scroll-in'} >
              Therapy can really benefit from there being time for my clients and myself to become fully acquainted allowing us to use our therapeutic relationship as a vehicle for positive and long-term changes. A lot of the therapy provided by services within this country often focuses on quick symptom removal rather than addressing and exploring the core issues that may lie at the root of these symptoms. Open ended sessions give us the chance to do as much exploration or in-depth work that you feel is necessary. Though goals can still be a part of the sessions, sometimes real changes or breakthroughs can happen when we aren't fixed on one set target.
            </Paragraph>
            <Seperator />
            <ParallaxContainer.SectionLabel />
            <Heading className={'gsap-scroll-in'} >
              Workplace
            </Heading>
            <Subheading className={'gsap-scroll-in'} >
              Employee Assistance Therapy
            </Subheading>
            <Paragraph className={'gsap-scroll-in'} >
              Join the 50% of UK businesses that engage with Employee Assistance Programmes. I offer block bookings to employers who recognise that sometimes their staff might need some one-to-one support from someone completely outside of the business. Get in touch to discuss reduced rate block bookings.
            </Paragraph>
            <Subheading className={'gsap-scroll-in'} >
              Mental Health &amp; Wellbeing Sessions
            </Subheading>
            <Paragraph className={'gsap-scroll-in'} >
              I have experience writing, editing, and presenting Mental Health &amp; Wellbeing Presentations.
            </Paragraph>
            <Paragraph className={'gsap-scroll-in'} >
              I am not a wellbeing fluffer or mindset coach kind of guy (not that there aren’t some good folks in those fields). I’m a dedicated and passionate believer in helping you and your team to integrate real, positive, and meaningful changes into your personal and professional lives. So, whatever that looks like, training up a staff member with bespoke courses and materials, or inviting me in to give a presentation, get in touch to discuss.
            </Paragraph>
          </TextWrapper>
        </Container>
      </ParallaxContainer>
    </Layout>
  );
}

export default ServicesPage;