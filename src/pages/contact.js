import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from 'components/layout/Layout';
import SplitContainer from 'components/splitContainer/SplitContainer';
import Container from 'components/container/Container';
import { TextWrapper, Title, Subtitle, Heading, Subheading, Paragraph, List, ListItem, Note, Seperator } from 'components/typography/Typography';
import { Form, Input } from 'components/form/Form';
import { Button } from 'components/button/Button';
import SEO from 'components/SEO/SEO';

function ContactPage() {

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
    <Layout pageTitle="Contact">
      <SEO
        title="Contact | Lyons Therapy"
        description="I offer a free 20-minute session where we can meet each other, discuss some details, and answer any questions you might have. Arrange a free consultation now."
      />
      <SplitContainer
        subContent={
          <Container
            backgroundColor="accent"
            fullHeight={true}
          >
            <TextWrapper>
              <Form
                onSubmit={
                  ({ name, subject, query }) => {
                    const emailAddess = 'toby@lyonstherapy.co.uk';
                    const body = `${query}\n\n${name}`;
                    const uri = encodeURI(`mailto:${emailAddess}?subject=${subject}&body=${body}`);
                    window.open(uri);
                  }
                }
              >
                <Input
                  name="name"
                  label="Name"
                  labelPrefix="your"
                  placeholder="Jane Smith"
                  note="How should we address you?"
                  type="text"
                  validators={['required']}
                />
                <Input
                  name="subject"
                  label="Subject"
                  labelPrefix="a"
                  placeholder="Introductory Session"
                  type="text"
                  note="What is the query relating to?"
                  validators={['required']}
                />
                <Input
                  name="query"
                  label="Message"
                  labelPrefix="a"
                  note="Enter your query"
                  isMultiline={true}
                  validators={['required']}
                />
                <Button
                  type="submit"
                  icon="markunread"
                  isPrimary={true}
                >
                  Send via Email
                </Button>
                <Note>Please note that this will open the default email provider on your device and format an email ready to  be sent.</Note>
              </Form>
            </TextWrapper>
          </Container>
        }
        pinSubContent={true}
      >
        <Container>
          <TextWrapper ref={textWrapperRef}>
            <Title className={'gsap-scroll-in'} >
              Contact
            </Title>
            <Subtitle className={'gsap-scroll-in'} >
              Pricing and contact information
            </Subtitle>
            <Seperator isBold={true} />
            <Heading className={'gsap-scroll-in'} >
              How to get in touch
            </Heading>
            <Paragraph className={'gsap-scroll-in'} >
              To book in a session or your free consultation, send over an email via the online form or directly to toby@lyonstherapy.co.uk. I aim to get back to enquiries within 48 hours.
            </Paragraph>
            <Subheading className={'gsap-scroll-in'} >
              Pricing
            </Subheading>
            <List className={'gsap-scroll-in'} >
              <ListItem>Remote work/Zoom Sessions: £45</ListItem>
              <ListItem>Face to Face Sessions: £50</ListItem>
              <ListItem>20 Minute introductory session: Free</ListItem>
            </List>
            <Paragraph className={'gsap-scroll-in'} >
              It’s important that we feel as though we can work well together and that you know what to expect in our sessions. Therefore I offer a free 20-minute Zoom session where we can meet each other, discuss some details and I can answer any questions you might have.
            </Paragraph>
            <Seperator />
            <Note className={'gsap-scroll-in'} >
              I offer a small number of concession rate slots for students and those with a low-household income, for further information please enquire.
            </Note>
          </TextWrapper>
        </Container>
      </SplitContainer>
    </Layout>
  );
}

export default ContactPage;