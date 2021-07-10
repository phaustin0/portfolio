import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
`;

export const Image = styled.img`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  width: 100%;
  height: 700px;
  object-fit: cover;
  object-position: 0 -50px;
`;

export const LeftArrowBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
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
