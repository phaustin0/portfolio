import React from "react";
import { Container, TestimonialImage } from "./Image";
import testimonial from "assets/testimonial.png";

const Image = ({ showImage, setShowImage }) => {
  const toggleShowImage = () => {
    let canShowImage = !showImage;
    setShowImage(canShowImage);
  };

  return (
    <Container onClick={toggleShowImage}>
      <TestimonialImage src={testimonial} alt="Testimonial"></TestimonialImage>
    </Container>
  );
};

export default Image;
