import styled from "styled-components";
import { devices } from "device";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  background: #dbdbdb;
  z-index: 100;
  box-shadow: 0 2px 25px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

export const Logo = styled.div`
  font-size: 3.75rem;
  font-family: "Mrs Sheppards", cursive;
`;

export const LogoContent = styled.a`
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;

  :hover {
    color: #006ceb;
    cursor: pointer;
  }

  :target {
    background: blue;
  }
`;

export const NavbarItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 60vw;

  @media ${devices.laptopL} {
    min-width: 75vw;
  }

  @media ${devices.laptop} {
    flex-direction: column;
    width: 100vw;
    position: absolute;
    top: 90px;
    left: 0;
    height: calc(100vh - 90px);
    padding: 70px 0;
    visibility: hidden;
    justify-content: space-evenly;
    transition: all 0.2s ease-out;
  }
`;

export const NavbarItemLink = styled.a`
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;

  :hover {
    color: #006ceb;
    cursor: pointer;
  }
`;

export const NavbarItem = styled.li`
  font-size: 2.5rem;
  font-family: "Overpass";
  font-weight: bold;
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 7.5px;

  @media ${devices.laptop} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    cursor: pointer;
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease-out;

    :hover ${NavbarItemLink} {
      color: #006ceb;
    }
  }
`;

export const Label = styled.label`
  padding: 28px 20px;
  position: relative;
  height: 100%;
  cursor: pointer;
  display: none;

  @media ${devices.laptop} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ToggleIcon = styled.span`
  background: black;
  display: block;
  height: 3px;
  width: 22px;
  position: relative;
  transition: all 0.2s ease-out;

  :before {
    position: absolute;
    content: "";
    background: black;
    display: block;
    width: 100%;
    height: 100%;
    top: 8px;
    transition: all 0.2s ease-out;
  }

  :after {
    position: absolute;
    content: "";
    background: black;
    display: block;
    width: 100%;
    height: 100%;
    top: -8px;
    transition: all 0.2s ease-out;
  }
`;

export const Toggler = styled.input`
  display: none;

  :checked ~ ${Label} ${ToggleIcon} {
    background: transparent;
  }

  :checked ~ ${Label} ${ToggleIcon}:before {
    transform: rotate(-45deg);
    top: 0;
  }

  :checked ~ ${Label} ${ToggleIcon}:after {
    transform: rotate(45deg);
    top: 0;
  }

  :checked ~ ${NavbarItems} {
    visibility: visible;
    background: #dbdbdb;
    display: flex;
  }

  :checked ~ ${NavbarItems} ${NavbarItem} {
    display: inline-flex;
    opacity: 1;
  }
`;
