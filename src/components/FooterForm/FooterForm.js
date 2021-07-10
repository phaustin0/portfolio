import styled from "styled-components";
import { devices } from "device";

export const Container = styled.section`
  flex: 6;
  padding: 30px;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  font-family: "Overpass", sans-serif;
  font-size: 1.15rem;
`;

export const Name = styled.section`
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media ${devices.tablet} {
    grid-column: 1/2;
  }
`;

export const NameInput = styled.input`
  outline: none;
  border: none;
  padding: 5px;
  padding-left: 10px;
  width: 98%;
  height: 40px;
  margin-top: 5px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 0.85rem;
  border-radius: 5px;
  background: rgb(238, 238, 238);
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }

  :focus {
    transform: translate(0, -7px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const Email = styled.section`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media ${devices.tablet} {
    grid-column: 1/2;
  }
`;

export const EmailInput = styled.input`
  outline: none;
  border: none;
  padding: 5px;
  padding-left: 10px;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 0.85rem;
  border-radius: 5px;
  background: rgb(238, 238, 238);
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }

  :focus {
    transform: translate(0, -7px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }
`;

export const Subject = styled.section`
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const SubjectInput = styled.input`
  outline: none;
  border: none;
  padding: 5px;
  padding-left: 10px;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 0.85rem;
  border-radius: 5px;
  background: rgb(238, 238, 238);
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }

  :focus {
    transform: translate(0, -7px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }
`;

export const Message = styled.section`
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const MessageInput = styled.textarea`
  margin-top: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 0.85rem;
  background: rgb(238, 238, 238);
  transition: all 0.3s ease;
  resize: none;

  :hover {
    transform: translate(0, -7px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }

  :focus {
    transform: translate(0, -7px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }
`;

export const Submit = styled.input`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  margin-top: 30px;
  outline: none;
  border: 2px solid rgb(238, 238, 238);
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  cursor: pointer;
  background: transparent;
  color: white;
  transition: all 0.3s ease;

  :hover {
    transform: translate(0, -7px);
    background: rgb(238, 238, 238);
    color: #006ceb;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
  }

  @media ${devices.tablet} {
    width: 100%;
  }
`;
