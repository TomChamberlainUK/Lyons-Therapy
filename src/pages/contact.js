import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from 'components/layout/Layout';
import SplitContainer from 'components/splitContainer/SplitContainer';
import Container from 'components/container/Container';
import { TextWrapper, Title, Subtitle, Heading, Subheading, Paragraph, List, ListItem, Note, Seperator } from 'components/typography/Typography';
import { Form, Input } from 'components/form/Form';
import { Button } from 'components/button/Button';

function ContactPage() {

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
    <Layout pageTitle="Contact">
      <SplitContainer subContent={
        <Container
          backgroundColor="accent"
          fullHeight={true}
        >
          <Form
            onSubmit={
              ({ name, subject, query }) => {
                const emailAddess = 'placeholder@email.com';
                const body = `${query}\n\n${name}`;
                const uri = encodeURI(`mailto:${emailAddess}?subject=${subject}&body=${body}`);
                window.open(uri);
              }
            }
          >
            <Input
              name="name"
              label="Name"
              labelPrefix="Your"
              placeholder="Jane Smith"
              note="How should we address you?"
              type="text"
              validators={['required', 'alphabetic']}
            />
            <Input
              name="subject"
              label="Subject"
              labelPrefix="A"
              placeholder="Something"
              type="text"
              note="What is the query relating to?"
              validators={['required', 'alphabetic']}
            />
            <Input
              name="query"
              label="Message"
              labelPrefix="A"
              note="Enter your query"
              isMultiline={true}
              validators={['required', 'alphabetic']}
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
        </Container>
      }>
        <Container>
          <TextWrapper ref={textWrapperRef}>
            <Title className={'gsap-scroll-in'} >
              Contact
            </Title>
            <Subtitle className={'gsap-scroll-in'} >
              Pricing and contact information
            </Subtitle>
            <Seperator isBold={true} />
            <Heading>
              How to get in touch
            </Heading>
            <Paragraph>
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
            <Note>
              I offer a small number of concession rate slots for students and those with a low-household income, for further information please enquire.
            </Note>
          </TextWrapper>
        </Container>
      </SplitContainer>
    </Layout>
  );
}

export default ContactPage;