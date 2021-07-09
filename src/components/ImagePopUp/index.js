import React from "react";
import { Container, Content, Author } from "./ImagePopUp";

const ImagePopUp = ({ showImage, setShowImage }) => {
  const toggleShowImage = () => {
    let canShowImage = !showImage;
    setShowImage(canShowImage);
  };

  return (
    <Container onClick={toggleShowImage}>
      <Content>Click on this card to view testimonial</Content>
      <Author> ~ Ms Chan, Teacher-in-Charge of Infocomm Club</Author>
    </Container>
  );
};

export default ImagePopUp;
