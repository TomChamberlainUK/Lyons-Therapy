import * as React from 'react';

import Layout from 'components/layout/Layout';
import { Container, SplitContainer, TextContainer } from 'components/container/Container';
import { Form, Input } from 'components/form/Form';
import { Button } from 'components/button/Button';
import { Title, Subtitle, Heading, Paragraph, Note, Seperator } from 'components/typography/Typography';

function ContactPage() {
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
          <TextContainer>
            <Title>Contact</Title>
            <Subtitle>There's going to be a form</Subtitle>
            <Seperator isBold={true} />
            <Heading>Heading</Heading>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
          </TextContainer>
        </Container>
      </SplitContainer>
    </Layout>
  );
}

export default ContactPage;