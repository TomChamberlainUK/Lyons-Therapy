import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from 'components/layout/Layout';
import ParallaxContainer from 'components/parallaxContainer/ParallaxContainer';
import { Container, TextContainer } from 'components/container/Container';
import { Title, Subtitle, Heading, Subheading, Paragraph, Note, Seperator, List, ListItem } from 'components/typography/Typography';

function ServicesPage() {

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
    <Layout pageTitle="Services">
      <ParallaxContainer images={
        [
          <StaticImage
            src="https://picsum.photos/seed/zz/1920/1080"
            alt="PLACEHOLDER IMAGE"
            placeholder="blurred"
            loading="eager"
          />,
          <StaticImage
            src="https://picsum.photos/seed/x/1920/1080"
            alt="PLACEHOLDER IMAGE"
            placeholder="blurred"
          />
        ]
      }>
        <Container>
          <TextContainer>
            <Title ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Services</Title>
            <Subtitle ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Whatever that entails</Subtitle>
            <Seperator isBold={true} />
            <Heading ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Heading</Heading>
            <Paragraph ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
            <Paragraph ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
            <Subheading ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Subheading</Subheading>
            <List ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >
              <ListItem>This is a bullet-point</ListItem>
              <ListItem>This is a bullet-point</ListItem>
              <ListItem>This is a bullet-point</ListItem>
              <ListItem>This is a bullet-point</ListItem>
            </List>
            <Seperator />
            <ParallaxContainer.SectionLabel />
            <Heading ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Heading</Heading>
            <Paragraph ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
            <Paragraph ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
            <Paragraph ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Paragraph>
            <Seperator />
            <Note ref={ref => textRefs.current[getNextTextRefIndex()] = ref} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero nisi. Sed euismod mattis gravida. In pulvinar, metus id tincidunt aliquam, mauris sapien consequat turpis, id malesuada sem lorem non ligula. Vestibulum dignissim metus nec justo dignissim, egestas suscipit orci tempus. Nunc a dolor urna. Fusce vel metus eget sapien feugiat consectetur sed molestie diam. Maecenas nisl metus, tempus commodo ullamcorper eget, porttitor sed metus. Nulla a arcu eu augue porta tincidunt nec ut felis.</Note>
          </TextContainer>
        </Container>
      </ParallaxContainer>
    </Layout>
  );
}

export default ServicesPage;