import React, { useEffect, useState } from "react";
import { Container, Body, Title, Content } from "./CompetitionCard";
import ImageSlider from "components/ImageSlider";

const CompetitionCard = ({ images, title, content, id }) => {
  const [isOdd, setIsOdd] = useState(true);

  useEffect(() => {
    if (id % 2 === 0) {
      setIsOdd(false);
    } else {
      setIsOdd(true);
    }
  }, [id, setIsOdd]);

  return (
    <Container isOdd={isOdd}>
      <ImageSlider images={images} isOdd={isOdd}></ImageSlider>
      <Body>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Body>
    </Container>
  );
};

export default CompetitionCard;
