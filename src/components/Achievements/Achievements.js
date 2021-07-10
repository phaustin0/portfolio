import styled from "styled-components";
import { BiChevronLeft as Left, BiChevronRight as Right } from "react-icons/bi";
import { devices } from "device";

export const Container = styled.section`
  padding-top: 130px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Overpass", sans-serif;
  font-weight: bold;
  font-size: 3.125rem;
  color: #006ceb;
  display: flex;
  align-items: center;

  @media ${devices.mobileL} {
    font-size: 10vw;
    margin-bottom: 3rem;
  }
`;

export const LeftArrow = styled(Left)`
  font-size: 3.75rem;
  transform: translate(0, -2px);

  @media ${devices.mobileL} {
    font-size: 12vw;
  }
`;

export const RightArrow = styled(Right)`
  font-size: 3.75rem;
  transform: translate(0, -2px);

  @media ${devices.mobileL} {
    font-size: 12vw;
  }
`;

export const SubTitle = styled.h3`
  font-size: 2.5rem;
  font-family: "Overpass", sans-serif;
  font-weight: bolder;
  color: #006ceb;
  margin-top: 4rem;
  margin-bottom: 30px;
`;

export const Testimonials = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  width: 100%;
`;

export const TestimonialCards = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-evenly;

  @media ${devices.laptopL} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Competitions = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const CompetitionCards = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Leadership = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
