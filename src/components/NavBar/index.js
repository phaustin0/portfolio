import React from "react";
import {
  Container,
  Logo,
  LogoContent,
  NavbarItems,
  NavbarItem,
  NavbarItemLink,
} from "./NavBar";

const NavBar = () => {
  return (
    <Container>
      <Logo>
        <LogoContent href="/portfolio">Z</LogoContent>
      </Logo>
      <NavbarItems>
        <NavbarItem>
          <NavbarItemLink href="#home">Home</NavbarItemLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarItemLink href="#about">About Me</NavbarItemLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarItemLink href="#projects">Projects</NavbarItemLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarItemLink href="#achievements">Achievements</NavbarItemLink>
        </NavbarItem>
      </NavbarItems>
    </Container>
  );
};

export default NavBar;
