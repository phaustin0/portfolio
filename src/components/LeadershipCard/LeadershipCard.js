import styled from "styled-components";
import { devices } from "device";

export const Body = styled.section`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 2rem;
  background: rgb(228, 228, 228);
`;

export const Title = styled.h3`
  font-family: "Overpass", sans-serif;
  color: #006ceb;
  font-size: 1.5rem;
  margin-bottom: 10px;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const Content = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1.15rem;
  line-height: 1.5rem;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const Container = styled.section`
  width: 60vw;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }

  :hover ${Body} {
    background: #eee;
  }

  @media ${devices.laptopL} {
    width: 70vw;
  }

  @media ${devices.laptop} {
    width: 80vw;
  }

  @media ${devices.tablet} {
    ${Title} {
      font-size: 1.2rem;
    }

    ${Content} {
      font-size: 0.9rem;
    }
  }
`;

export const ContentLink = styled.span`
  color: #006ceb;
  font-weight: bold;
`;
