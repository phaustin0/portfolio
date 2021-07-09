import styled from "styled-components";
import { devices } from "device";

export const Title = styled.h3`
  margin-top: 10px;
  color: #000ceb;
  font-family: "Overpass", sans-serif;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }

  @media ${devices.laptop} {
    width: 100%;
  }
`;

export const Content = styled.p`
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 1.05rem;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const Container = styled.section`
  padding: none;
  height: 400px;
  background: #e4e4e4;
  display: flex;
  flex-direction: ${(props) => (props.isOdd ? "row" : "row-reverse")};
  border-radius: 15px;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    background: #eee;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }

  :not(:last-of-type) {
    margin-bottom: 60px;
  }

  @media ${devices.laptop} {
    width: 80vw;
    flex-direction: column;
    height: 600px;
  }

  @media ${devices.tablet} {
    height: 670px;
  }

  @media ${devices.mobileL} {
    height: 620px;

    ${Title} {
      font-size: 1.2rem;
    }

    ${Content} {
      font-size: 0.8rem;
    }
  }

  @media ${devices.mobileM} {
    height: 640px;
  }
`;

export const Body = styled.section`
  width: 25vw;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;

  @media ${devices.laptop} {
    width: 100%;
    height: 100px;
  }
`;
