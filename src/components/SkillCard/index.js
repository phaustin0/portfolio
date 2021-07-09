import React from "react";
import {
  Card,
  Container,
  Svg,
  GreyCircle,
  BlueCircle,
  Number,
  Percentage,
  PercentageSign,
} from "./SkillCard";

const SkillCard = ({ percent, children }) => {
  const styles = {
    strokeDashoffset: ((100 - percent) / 100) * 440,
    stroke: "#000ceb",
  };

  return (
    <Card>
      {/* Percentage Part */}
      <Container>
        {/* Circle Portion */}
        <Svg>
          <GreyCircle cx="70" cy="70" r="70"></GreyCircle>
          <BlueCircle cx="70" cy="70" r="70" style={styles}></BlueCircle>
        </Svg>

        {/* Number Portion */}
        <Number>
          <Percentage>
            {percent}
            <PercentageSign>%</PercentageSign>
          </Percentage>
        </Number>
      </Container>
      {/* Rest of the card */}
      {children}
    </Card>
  );
};

export default SkillCard;
