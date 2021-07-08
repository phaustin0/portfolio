import styled from "styled-components";
import { devices } from "device";
import { FaGithub as Github, FaInstagram as Instagram } from "react-icons/fa";

export const Container = styled.header`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media ${devices.laptop} {
    align-items: center;
    flex-direction: column-reverse;
    margin-top: 170px;
  }

  @media ${devices.tablet} {
    margin-top: 12vw;
  }
`;

export const Left = styled.section`
  flex: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7vw;
  margin-right: -7vw;

  @media ${devices.laptop} {
    margin: 0;
    align-items: center;
  }
`;

export const Text = styled.section`
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -5px);
    text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const Greeting = styled.h3`
  font-size: 3.125rem;
  font-weight: bold;
  font-family: "Overpass", sans-serif;
  line-height: 3rem;
  color: #006ceb;

  @media ${devices.laptopL} {
    font-size: 3rem;
  }

  @media ${devices.tablet} {
    font-size: 2rem;
  }
`;

export const FirstName = styled.h1`
  font-size: 9.375rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  line-height: 8rem;
  margin-top: 10px;

  @media ${devices.laptopL} {
    font-size: 7rem;
    line-height: 6.5rem;
    margin-top: 0px;
  }

  @media ${devices.tablet} {
    font-size: 17vw;
    line-height: default;
    margin-top: -10px;
  }
`;

export const RemainingName = styled.h2`
  font-size: 3.125rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  display: flex;
  line-height: 3rem;
  align-items: center;
  letter-spacing: 7px;

  @media ${devices.laptopL} {
    font-size: 2.5rem;
    letter-spacing: 3.8px;
  }

  @media ${devices.tablet} {
    font-size: 7vw;
    letter-spacing: initial;
    margin-top: -15px;
  }
`;

export const Icons = styled.section`
  margin-top: 15px;
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: space-between;

  @media ${devices.laptopL} {
    width: 17%;
  }

  @media ${devices.tablet} {
    width: 60%;
  }
`;

export const Icon = styled.a``;

export const GithubIcon = styled(Github)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  border-radius: 50%;
  cursor: pointer;
  color: black;
  transition: all 0.3s ease;

  :hover {
    color: #006ceb;
    transform: translate(0, -7px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  @media ${devices.tablet} {
    font-size: 6vw;
  }

  @media ${devices.mobileL} {
    font-size: 10vw;
  }
`;

export const InstagramIcon = styled(Instagram)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-size: 2.5rem;
  cursor: pointer;
  color: black;
  transition: all 0.3s ease;

  :hover {
    color: #006ceb;
    transform: translate(0, -7px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  @media ${devices.tablet} {
    font-size: 6vw;
  }

  @media ${devices.mobileL} {
    font-size: 10vw;
  }
`;

export const Right = styled.section`
  flex: 7;
  display: flex;
  align-items: center;
  padding-top: 30px;
  margin-right: 4vw;
  margin-left: -4vw;

  @media ${devices.laptop} {
    margin: 0;
    justify-content: center;
  }

  @media ${devices.tablet} {
    margin-top: -50px;
  }

  @media ${devices.mobileL} {
    margin-bottom: -150px;
  }
`;

export const Image = styled.img`
  width: 690px;
  height: 896px;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
  }

  @media ${devices.laptopL} {
    height: 80vh;
    width: auto;
  }

  @media ${devices.tablet} {
    width: 75vw;
    height: auto;
  }
`;
