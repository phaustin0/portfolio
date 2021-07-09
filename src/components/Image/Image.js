import styled from "styled-components";
import { devices } from "device";

export const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TestimonialImage = styled.img`
  cursor: default;
  border-radius: 15px;
  width: 35vw;
  height: auto;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
  }

  @media ${devices.laptopL} {
    width: 48vw;
  }

  @media ${devices.tablet} {
    width: 70vw;
  }

  @media ${devices.mobileL} {
    width: 75vw;
  }
`;
