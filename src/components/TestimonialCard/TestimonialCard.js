import styled from "styled-components";
import { devices } from "device";

export const Content = styled.p`
  font-size: 1.25rem;
`;

export const Author = styled.small`
  color: #006ceb;
  margin-left: auto;
  font-size: 0.93rem;
  font-weight: bold;
`;

export const Container = styled.section`
  background: #e4e4e4;
  border-radius: 15px;
  width: 700px;
  height: 400px;
  padding: 30px;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    background: #eee;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }

  @media ${devices.laptopL} {
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
  }

  @media ${devices.laptop} {
    ${Content} {
      font-size: 1.1rem;
    }
  }

  @media ${devices.tablet} {
    height: 500px;

    ${Content} {
      font-size: 1rem;
    }

    ${Author} {
      font-size: 0.66rem;
    }
  }

  @media ${devices.mobileL} {
    height: 550px;

    ${Author} {
      font-size: 0.58rem;
    }
  }

  @media ${devices.mobileM} {
    height: 575px;

    ${Content} {
      font-size: 0.9rem;
    }
  }
`;
