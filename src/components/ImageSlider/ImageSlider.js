import styled from "styled-components";
import { devices } from "device";

export const Container = styled.section`
  position: relative;
  width: 600px;
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.isOdd
      ? "5px 0 25px rgba(0, 0, 0, 0.3)"
      : "-5px 0 25px rgba(0, 0, 0, 0.3)"};

  @media ${devices.laptop} {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    width: 80vw;
    height: 400px;
  }
`;

export const Image = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 0 0;
`;

export const LeftArrowBtn = styled.button`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  position: absolute;
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  background: none;
  transition: all 0.2s ease;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

export const RightArrowBtn = styled.button`
  position: absolute;
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;
