import styled from "styled-components";

export const Card = styled.section`
  position: relative;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #eee;
  border-radius: 20px;
  transition: all 0.3s ease;
  color: #999;
  justify-self: center;
  align-self: center;

  :hover {
    background: #f7f7f7;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
    transform: translate(0, -10px);
    color: #006ceb;
  }
`;

export const Container = styled.section`
  position: relative;
  width: 150px;
  height: 150px;
`;

export const Svg = styled.svg`
  position: relative;
  width: 150px;
  height: 150px;
  transform: rotate(90deg) scaleX(-1);
`;

export const GreyCircle = styled.circle`
  width: 150px;
  height: 150px;
  fill: none;
  stroke-width: 10;
  stroke: #ccc;
  transform: translate(5px, 5px);
  stroke-dasharray: 440;
  stroke-dashoffset: 0;
  stroke-linecap: round;
`;

export const BlueCircle = styled.circle`
  width: 150px;
  height: 150px;
  fill: none;
  stroke-width: 10;
  stroke: #000;
  transform: translate(5px, 5px);
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  stroke-linecap: round;
`;

export const Number = styled.section`
  position: absolute;
  top: 3px;
  left: 2px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #111;
`;

export const Percentage = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
`;

export const PercentageSign = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
`;
