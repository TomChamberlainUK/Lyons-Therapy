import * as React from 'react';

import Layout from 'components/layout/Layout';
import { Container } from 'components/container/Container';
import { Title, Subtitle, Seperator } from 'components/typography/Typography';

function IndexPage() {
  return (
    <Layout pageTitle="Home">
      <Container>
        <Title>Toby Lyons</Title>
        <Subtitle>The venerable ser Toby of house Lyons</Subtitle>
        <Seperator isBold={true} />
      </Container>
    </Layout>
  );
}

export default IndexPage;