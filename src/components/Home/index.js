import React from "react";
import Beach from "assets/beach.png";
import {
  Container,
  Left,
  Text,
  Greeting,
  FirstName,
  RemainingName,
  Icons,
  Icon,
  GithubIcon,
  InstagramIcon,
  Right,
  Image,
} from "./Home";

const Home = () => {
  return (
    <Container id="home">
      {/* Text Portion */}
      <Left>
        {/* Greeting */}
        <Text>
          <Greeting>Hey there! I'm</Greeting>
          <FirstName>Zechariah</FirstName>
          <RemainingName>Faustino Lumasag Singh</RemainingName>
        </Text>
        {/* Icons */}
        <Icons>
          <Icon href="https://github.com/phaustin0">
            <GithubIcon></GithubIcon>
          </Icon>
          <Icon href="https://instagram.com/zchfls">
            <InstagramIcon></InstagramIcon>
          </Icon>
        </Icons>
      </Left>

      {/* Picture */}
      <Right>
        <Image src={Beach}></Image>
      </Right>
    </Container>
  );
};

export default Home;
