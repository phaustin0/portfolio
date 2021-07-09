import styled from "styled-components";
import { devices } from "device";
import { BiChevronLeft as Left, BiChevronRight as Right } from "react-icons/bi";

export const Container = styled.section`
  padding-top: 130px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-family: "Overpass", sans-serif;
  font-weight: bold;
  font-size: 3.125rem;
  color: #006ceb;
  display: flex;
  align-items: center;
  margin-bottom: 5rem;

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

export const ProjectCards = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 400px);
  grid-column-gap: 30px;
  grid-row-gap: 100px;
  justify-content: space-evenly;

  @media ${devices.mobileL} {
    grid-template-columns: repeat(auto-fit, 80vw);
  }
`;
