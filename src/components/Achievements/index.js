import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  LeftArrow,
  RightArrow,
  SubTitle,
  Testimonials,
  TestimonialCards,
  Competitions,
  CompetitionCards,
  Leadership,
} from "./Achievements";
import TestimonialCard from "components/TestimonialCard";
import ImagePopUp from "components/ImagePopUp";
import Image from "components/Image";
import CompetitionCard from "components/CompetitionCard";
import LeadershipCard from "components/LeadershipCard";

// import competition certificates and photos
import Armageddon from "assets/certificates/2018_Stritwise Armagaddon.jpg";
import AceOfCoders from "assets/certificates/2019_Ace of Coders.jpg";
import AoC from "assets/achievements/aoc.jpg";
import AoCResults from "assets/achievements/aoc results.png";
import Ncc from "assets/achievements/ncc solo.jpg";
import NccDuo from "assets/achievements/ncc duo.jpg";
import NccGroup from "assets/achievements/ncc group.jpg";
import Dawn from "assets/certificates/2020_Stritwise Dawn of a New Age.png";
import DawnWin from "assets/achievements/stritwise 2020.jpg";

// import leadership certificates
import Colours from "assets/certificates/2020_Colours Award.jpg";
import Leader from "assets/certificates/2020_Infocomm Leader.jpg";
import Peacemakers from "assets/certificates/2020_Peacemakers Conference.jpg";

const Achievements = () => {
  // showing of popup image
  const [showImage, setShowImage] = useState(false);

  // awards/certificates
  const [armageddon, setArmageddon] = useState([]);
  const [aceOfCoders, setAceOfCoders] = useState([]);
  const [ncc, setNcc] = useState([]);
  const [dawn, setDawn] = useState([]);

  // leadership
  const [leadership, setLeadership] = useState([]);

  // set the awards
  useEffect(() => {
    setArmageddon([Armageddon]);
    setAceOfCoders([AceOfCoders, AoC, AoCResults]);
    setNcc([Ncc, NccDuo, NccGroup]);
    setDawn([Dawn, DawnWin]);

    setLeadership([Leader, Colours, Peacemakers]);
  }, []);

  return (
    <Container id="achievements">
      {/* Title */}
      <Title>
        <LeftArrow></LeftArrow>
        Achievements
        <RightArrow></RightArrow>
      </Title>

      {/* Testimonials */}
      <Testimonials>
        <SubTitle>Testimonials</SubTitle>
        <TestimonialCards>
          <TestimonialCard
            content="Zechariah was the Infocomm Club President from 2020 to 2021. As an
            Infocomm club member and President, Zechariah has shown much passion
            in different areas of Infocomm Technology, particularly algorithm
            visualisation, web development and game development. He often led by
            example, sharing his knowledge and guiding his juniors. Zechariah also
            participated actively in various Infocomm competitions such as
            StrITwise, Ace of Coders, and National Coding Championship and even
            won Ace of Coders 2019 and StrITwise Dawn of a New Age 2020."
            author="Mrs Wang, Teacher-in-Charge of Infocomm Club"
          />
          <ImagePopUp showImage={showImage} setShowImage={setShowImage} />
        </TestimonialCards>
      </Testimonials>

      {/* Image Pop Up */}
      {showImage && <Image showImage={showImage} setShowImage={setShowImage} />}

      {/* Competitions */}
      <Competitions>
        <SubTitle>Competitions</SubTitle>
        <CompetitionCards>
          {/* StrITwise Armageddon */}
          <CompetitionCard
            images={armageddon}
            title={"StrITwise Armageddon 2018"}
            content={
              "My team of 3 others and I represented our school during StrITwise Armageddon in 2018."
            }
            id={1}
          />

          {/* Ace of Coders */}
          <CompetitionCard
            images={aceOfCoders}
            title={"Ace of Coders 2019"}
            content={
              "My junior and I represented our school during the National Coding Championship in 2019. With hard-work and determination, we manage to become the Ace of Coders and won the competition."
            }
            id={2}
          />

          {/* National Coding Championship */}
          <CompetitionCard
            images={ncc}
            title={"National Coding Championship 2019"}
            content={
              "My friend and I represented our school during the National Coding Championship in 2019. We worked hard during the one-day competition and managed to achieve 4th place."
            }
            id={3}
          />

          {/* StrITwise Dawn of a New Age */}
          <CompetitionCard
            images={dawn}
            title={"StrITwise Dawn of a New Age 2020"}
            content={
              "My team of 3 others and I represented our school during StrITwise Dawn of a New Age in 2020. Putting in our blood, sweat and tears and burning the midnight oil paid dividends - we clinched 1st place!"
            }
            id={4}
          />
        </CompetitionCards>
      </Competitions>

      {/* Leadership */}
      <Leadership>
        <SubTitle>Leadership</SubTitle>

        {/* Leadership Card */}
        <LeadershipCard images={leadership} />
      </Leadership>
    </Container>
  );
};

export default Achievements;
