import React from "react";
import { Container, Content, Author } from "./TestimonialCard";

const TestimonialCard = ({ content, author }) => {
  return (
    <Container>
      <Content>{content}</Content>
      <Author> ~ {author}</Author>
    </Container>
  );
};

export default TestimonialCard;
