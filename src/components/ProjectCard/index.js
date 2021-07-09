import React from "react";
import {
  Container,
  ImageContainer,
  Image,
  Overlay,
  OverlayText,
  Body,
  Content,
  GithubIcon,
} from "./ProjectCard";

const ProjectCard = ({ link, image, overlay, children }) => {
  return (
    <Container href={link}>
      {/* Image */}
      <ImageContainer>
        <Image src={image}></Image>
        <Overlay>
          <OverlayText>{overlay}</OverlayText>
        </Overlay>
      </ImageContainer>

      {/* Body */}
      <Body>
        {/* Text */}
        <Content>{children}</Content>
        <GithubIcon></GithubIcon>
      </Body>
    </Container>
  );
};

export default ProjectCard;
