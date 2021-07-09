import styled from "styled-components";
import { FaGithub as Github } from "react-icons/fa";

export const Overlay = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background: #006ceb;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: all 0.5s ease;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const OverlayText = styled.section`
  color: white;
  font-size: 20px;
  overflow: hidden;
  text-align: center;
`;

export const Container = styled.a`
  width: 400px;
  height: 630px;
  background: #e4e4e4;
  border-radius: 15px;
  transition: all 0.6s ease;
  cursor: pointer;
  text-decoration: none;
  color: black;

  :hover {
    background: rgb(238, 238, 238);
    transform: translate(0, -10px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }

  :hover ${Overlay} {
    bottom: 35%;
    height: 65%;
    width: 100%;
  }
`;

export const ImageContainer = styled.section`
  width: 100%;
  height: 65%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Body = styled.section`
  width: 100%;
  height: 35%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.section`
  height: 100%;
`;

export const GithubIcon = styled(Github)`
  font-size: 2.8125rem;
  color: black;
  border-radius: 100%;
  transition: all 0.3s ease;
  :hover {
    color: #006ceb;
    transform: translate(0, -5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const ProjectCardTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.4375rem;
  margin-bottom: 3px;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -4px);
    text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const ProjectCardText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 450;
  font-size: 1.125rem;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -4px);
    text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;
