import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/layout/Layout';
import Container from 'components/container/Container';
import { TextWrapper, Title, Subtitle, Heading, Paragraph, Seperator } from 'components/typography/Typography';

export default function pageNotFoundPage() {
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Page Not Found | Lyons Therapy</title>
      </Helmet>
      <Container>
          <TextWrapper>
            <Title>
              404
            </Title>
            <Subtitle>
              Page not found.
            </Subtitle>
            <Seperator isBold={true} />
            <Heading>
              Oops!
            </Heading>
            <Paragraph>
              The page you are looking for doesn't exist.
            </Paragraph>
          </TextWrapper>
        </Container>
    </Layout>
  );
}