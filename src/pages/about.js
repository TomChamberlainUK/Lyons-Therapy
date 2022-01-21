import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from 'components/layout/Layout';
import ParallaxContainer from 'components/parallaxContainer/ParallaxContainer';
import Container from 'components/container/Container';
import { TextWrapper, Title, Subtitle, Heading, Subheading, Paragraph, Seperator } from 'components/typography/Typography';

function AboutPage() {

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
    <Layout pageTitle="About">
      <ParallaxContainer
        images={
          [
            <StaticImage
              src="../images/indoor_plant.jpeg"
              alt="An indoor potted plant in front of a plain white wall"
              placeholder="blurred"
              loading="eager"
              imgStyle={{
                objectPosition: 'left',
                transform: 'scaleX(-1)'
              }}
            />,
            <StaticImage
              src="../images/toby_lyons_02.jpeg"
              alt="Toby Lyons wearing a sweater stood in front of a brick wall"
              placeholder="blurred"
              imgStyle={{
                objectPosition: 'right'
              }}
            />,
            <StaticImage
              src="../images/sunset_02.jpg"
              alt="A field of wild grass with the sun setting in the background"
              placeholder="blurred"
              imgStyle={{
                objectPosition: '100% calc(50% + 100px)'
              }}
            />
          ]
        }
      >
        <Container>
          <TextWrapper ref={textWrapperRef}>
            <Title className={'gsap-scroll-in'} >
              About
            </Title>
            <Subtitle className={'gsap-scroll-in'} >
              An overview of what this therapy stuff is all about, and how I work.
            </Subtitle>
            <Seperator isBold={true}/>
            <Heading className={'gsap-scroll-in'} >
              Why Therapy?
            </Heading>
            <Paragraph className={'gsap-scroll-in'} >
              There are many different reasons why you might be thinking about starting therapy. You might be feeling out of sorts, out of sync or not quite yourself. You might need support as you move through a difficult phase or transition in your life or you may recognise the need to explore and process some parts of your past.
            </Paragraph>
            <Paragraph className={'gsap-scroll-in'} >
              From anxiety or depression to stress management and relationship difficulties therapy has the potential to help everyone differently.
            </Paragraph>
            <Subheading className={'gsap-scroll-in'} >
              Does it work?
            </Subheading>
            <Paragraph className={'gsap-scroll-in'} >
              I wholeheartedly believe in the transformative and healing power of therapy because I’ve seen it happen with my clients, and experienced it myself. I’m of the belief that it needn’t be just for those that are experiencing hard times. From developing a greater understanding of how we function in relationships (familial, professional, or romantic), to examining and challenging an internal critical voice, we can always benefit from a little self-exploration no matter how good or bad we feel at present.
            </Paragraph>
            <Subheading className={'gsap-scroll-in'} >
              Relational-Integrative Therapy
            </Subheading>
            <Paragraph className={'gsap-scroll-in'} >
              The unique nature of each client’s needs is reflected in my mode of practice. I am a Relational-Integrative Psychotherapist. Relational doesn’t mean I’m solely focused on your current relationships, it defines a mode of practice that considers how we each exist in, are developed through, and can experience difficulties in our lives because of our relationships (past & present). It also examines and works with how we relate to one another in our therapy sessions. The integrative part in my practice means that we will create a unique therapeutic approach together, drawing on different techniques and theories to fit your personality, goals and desires.
            </Paragraph>
            <Seperator />
            <ParallaxContainer.SectionLabel />
            <Heading className={'gsap-scroll-in'} >
              How I work
            </Heading>
            <Paragraph className={'gsap-scroll-in'} >
              I consider myself to be an active participant in a therapy session, meaning I am not just a silent “mhm”-er. To get the most out of our sessions I find it’s important to engage with your world and whatever has brought you to therapy at a pace with which you feel comfortable.
            </Paragraph>
            <Paragraph className={'gsap-scroll-in'} >
              All my work is conducted discreetly and in the strictest confidence, the boundaries of this confidence and all the other details of how the sessions will work are discussed clearly and agreed upon prior to getting started.
            </Paragraph>
            <Subheading className={'gsap-scroll-in'} >
              What I do
            </Subheading>
            <Paragraph className={'gsap-scroll-in'} >
              I pride myself on my ability to create a safe and judgement-free space with each of my clients. Together we can build a therapeutic relationship built on warmth, genuine care, and trust. These foundations are essential for the discoveries and challenges that can be part of the therapeutic process as we move towards growth, empowerment, or healing.
            </Paragraph>
            <Paragraph className={'gsap-scroll-in'} >
              I’m a therapist who cares deeply about his work. It’s very important to me that my clients get the most out of their therapeutic experience - that they feel truly heard and supported throughout our time together.
            </Paragraph>
            <Subheading className={'gsap-scroll-in'} >
              Counselling vs Psychotherapy?
            </Subheading>
            <Paragraph className={'gsap-scroll-in'} >
              Some practitioners call themselves Counsellors, some call themselves Psychotherapists. Though I’m qualified as both – I call myself a therapist to meet in the middle.
            </Paragraph>
            <Seperator />
            <ParallaxContainer.SectionLabel />
            <Heading className={'gsap-scroll-in'} >
              Qualifications
            </Heading>
            <Paragraph className={'gsap-scroll-in'} >
              I have a Psychology Degree and Two Postgraduate Psychotherapy &amp; Counselling Qualifications (PG Certificate/PG Diploma). I am a Registered Member of the British Association for Counselling &amp; Psychotherapy (MBACP).
            </Paragraph>
            <Subheading className={'gsap-scroll-in'} >
              Previous employment
            </Subheading>
            <Paragraph className={'gsap-scroll-in'} >
              Before I became a therapist, I worked many weird and wonderful roles (most notably I once dressed as an iPhone and gave out flyers), though much of the time I spent studying I was also working in the Hospitality Industry, from barback to Restaurant Manager and everything in between. Alongside my private practice I also write and deliver Mental Health &amp; Wellbeing Workshops for “So Lets Talk”, a leading not-for-profit platform and work for a University.
            </Paragraph>
            <Subheading className={'gsap-scroll-in'} >
              Areas of interest
            </Subheading>
            <Paragraph className={'gsap-scroll-in'} >
              I have experience working with anxiety, depression, adverse childhood experiences, relationship difficulties, trauma, stress, loss, COVID-19, infidelity, self-esteem, health anxiety, post-prison sentence adjustment, emotional abuse, grief, familial pressures, promoting self-care, well-being, personal development, boosting confidence, and more.
            </Paragraph>
          </TextWrapper>
        </Container>
      </ParallaxContainer>
    </Layout>
  );
}

export default AboutPage;