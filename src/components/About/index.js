import React from "react";
import {
  Container,
  Title,
  LeftArrow,
  RightArrow,
  Body,
  Image,
  Content,
  ContentHeader,
  ContentHeaderName,
  Heart,
  ContentText,
  ContentJob,
  Skills,
  SkillsTitle,
  SkillCards,
  Html,
  Css,
  Js,
  Python,
  Linux,
  Vim,
  Unity,
  Git,
} from "./About";
import SkillCard from "components/SkillCard";
import TreeImage from "assets/tree.JPG";

const About = () => {
  return (
    <Container id="about">
      {/* Title */}
      <Title>
        <LeftArrow></LeftArrow>
        About Me
        <RightArrow></RightArrow>
      </Title>

      {/* Main Section */}
      <Body>
        <Image src={TreeImage} alt="me in a tree"></Image>
        <Content>
          <ContentHeader>
            My name is <ContentHeaderName>Zechariah</ContentHeaderName>
            <br />
            and I <Heart></Heart> technology
          </ContentHeader>
          <ContentText>
            Being born into a tech-centered and tech-driven world, I was bound
            to use technology at some point. Growing up, I started to realise
            how vital technology is in our lives, thus I decided to learn
            programming so I could contribute to this evergrowing industry.{" "}
            <br />
            <br /> Ever since young, I have always wondered how software was
            designed under the hood, and I was always determined to find it out.
            This led me to learn web development with HTML, CSS, and JavaScript.
            I eventually moved on to Python and also tinkered with game
            development in Unity. <br />
            <br /> When I wrote my first line of code, I knew this was what I
            wanted to do. I wanted to become a{" "}
            <ContentJob>software developer</ContentJob>.
          </ContentText>
        </Content>
      </Body>

      {/* Skills Section */}
      <Skills>
        <SkillsTitle>My Skills</SkillsTitle>
        <SkillCards>
          {/* Html */}
          <SkillCard percent={60}>
            <Html></Html>
          </SkillCard>

          {/* Css */}
          <SkillCard percent={65}>
            <Css></Css>
          </SkillCard>

          {/* JavaScript */}
          <SkillCard percent={80}>
            <Js></Js>
          </SkillCard>

          {/* Python */}
          <SkillCard percent={80}>
            <Python></Python>
          </SkillCard>

          {/* Linux */}
          <SkillCard percent={65}>
            <Linux></Linux>
          </SkillCard>

          {/* Vim */}
          <SkillCard percent={65}>
            <Vim></Vim>
          </SkillCard>

          {/* Unity */}
          <SkillCard percent={35}>
            <Unity></Unity>
          </SkillCard>

          {/* Git */}
          <SkillCard percent={70}>
            <Git></Git>
          </SkillCard>

          {/* add swift + solidity skill cards */}
        </SkillCards>
      </Skills>
    </Container>
  );
};

export default About;
