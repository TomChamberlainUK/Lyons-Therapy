import * as React from 'react';
import { navigate } from 'gatsby';

import Layout from 'components/layout/Layout';
import { Container, SplitContainer, TextContainer } from 'components/container/Container';
import { Button, ButtonSet } from 'components/button/Button';
import SplashGraphic from 'components/splashGraphic/SplashGraphic';
import { Title, Subtitle, Heading, Paragraph, Seperator } from 'components/typography/Typography';


function IndexPage() {
  return (
    <Layout pageTitle="Home">
      <SplitContainer
        subContent={<SplashGraphic />}
        centered={true}
      >
        <Container>
          <TextContainer>
            <Title>Toby Lyons</Title>
            <Subtitle>BA, PG Cert, PG Dip, MBACP</Subtitle>
            <Seperator isBold={true} />
            <Heading>Counselling and Psychotherapy</Heading>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida.</Paragraph>
            <Seperator />
            <ButtonSet>
              <Button
                onClick={() => navigate('/contact')}
                icon={'markunread'}
                isPrimary={true}
              >
                Get in Touch!
              </Button>
              <Button onClick={() => navigate('/about')}>
                Find Out More
              </Button>
              <Button onClick={() => navigate('/services')}>
                What we Offer
              </Button>
            </ButtonSet>
          </TextContainer>
        </Container>
      </SplitContainer>
    </Layout>
  );
}

export default IndexPage;