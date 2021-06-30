import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/layout/Layout';
import ParallaxContainer from 'components/parallaxContainer/ParallaxContainer';
import { Container } from 'components/container/Container';
import { Title, Subtitle, Heading, Subheading, Paragraph, Note, Seperator, List, ListItem } from 'components/typography/Typography';

function AboutPage() {

  return (
    <Layout pageTitle="About">
      <ParallaxContainer
        images={
          [
            <StaticImage
              src="https://picsum.photos/seed/a/1920/1080"
              alt="PLACEHOLDER IMAGE"
              placeholder="blurred"
            />,
            <StaticImage
              src="https://picsum.photos/seed/b/1920/1080"
              alt="PLACEHOLDER IMAGE"
              placeholder="blurred"
            />,
            <StaticImage
              src="https://picsum.photos/seed/c/1920/1080"
              alt="PLACEHOLDER IMAGE"
              placeholder="blurred"
            />
          ]
        }
      >
        <Container>
          <Title>One Big Title</Title>
          <Subtitle>And a subtitle to go along with it</Subtitle>
          <Seperator isBold={true}/>
          <Heading>Heading</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
          <Subheading>Subheading</Subheading>
          <List>
            <ListItem>This is a bullet-point</ListItem>
            <ListItem>This is a bullet-point</ListItem>
            <ListItem>This is a bullet-point</ListItem>
            <ListItem>This is a bullet-point</ListItem>
          </List>
          <Seperator />
          <ParallaxContainer.SectionLabel />
          <Heading>Heading</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
          <Seperator />
          <ParallaxContainer.SectionLabel />
          <Heading>Heading</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
          <Seperator />
          <Note>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Note>
        </Container>
      </ParallaxContainer>
    </Layout>
  );
}

export default AboutPage;