import React from "react";
import { Container, Body, Title, Content, ContentLink } from "./LeadershipCard";
import LeadershipImageSlider from "components/LeadershipImageSlider";

const LeadershipCard = ({ images }) => {
  return (
    <Container>
      {/* Text Portion */}
      <Body>
        <Title>President of the Infocomm Club [2020-2021]</Title>
        <Content>
          When I was in Sec 3, I was appointed as the President of the Infocomm
          Club. Throughout the year, I was faced with many challenges - such as
          enduring through the lockdown, where we used online resources like{" "}
          <ContentLink>code.org</ContentLink> to refine our understanding of
          programming and our technical knowledge. Another challenge was after
          the lockdown. With the CCA having to be split in two, I had to go from
          place to place just to keep things in check. After a tiring but
          fulfilling year, I stepped down to focus on my O Level Examinations
        </Content>
      </Body>

      {/* Image Slider */}
      <LeadershipImageSlider images={images} />
    </Container>
  );
};

export default LeadershipCard;
