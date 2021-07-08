import styled from "styled-components";
import { devices } from "device";
import { BiChevronLeft as Left, BiChevronRight as Right } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

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
  margin-bottom: 5rem;

  @media ${devices.mobileM} {
    font-size: 10vw;
    margin-bottom: 3rem;
  }
`;

export const LeftArrow = styled(Left)`
  font-size: 3.75rem;
  transform: translate(0, -2px);

  @media ${devices.mobileM} {
    font-size: 12vw;
  }
`;

export const RightArrow = styled(Right)`
  font-size: 3.75rem;
  transform: translate(0, -2px);

  @media ${devices.mobileM} {
    font-size: 12vw;
  }
`;

export const Body = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 450px;
  height: auto;
  border-radius: 20px;
  margin-right: 50px;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }

  @media ${devices.laptopL} {
    width: 30vw;
    height: 100%;
  }

  @media ${devices.tablet} {
    margin-right: 0;
    margin-bottom: 50px;
    width: 50vw;
    min-width: 300px;
    height: auto;
  }

  @media ${devices.mobileL} {
    width: 80vw;
    height: auto;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(0, -10px);
`;

export const ContentHeader = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -5px);
    text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  @media ${devices.laptopL} {
    font-size: 1.8rem;
  }

  @media ${devices.mobileL} {
    text-align: center;
    font-size: 7vw;
  }
`;

export const ContentHeaderName = styled.span`
  font-size: 2.3rem;
  color: #006ceb;
  transition: all 0.3s ease;

  :hover {
    color: #005ec9;
  }

  @media ${devices.laptopL} {
    font-size: 1.9rem;
  }

  @media ${devices.mobileL} {
    font-size: 8vw;
  }
`;

export const Heart = styled(FaHeart)`
  color: #ee3939;
  transform: translate(0, 3px);
  transition: all 0.3s ease;

  :hover {
    color: #e63838;
    transform: translate(0, -1px);
    text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const ContentText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.3rem;
  width: 600px;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -5px);
    text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  @media ${devices.laptopL} {
    font-size: 1.2rem;
    width: 40vw;
  }

  @media ${devices.tablet} {
    width: 60vw;
    min-width: 380px;
  }

  @media ${devices.mobileL} {
    width: 60vw;
    min-width: 350px;
  }

  @media ${devices.mobileM} {
    width: 80vw;
    min-width: 280px;
  }
`;

export const ContentJob = styled.span`
  color: #006ceb;
`;
