import React, { useState } from "react";
import {
  Container,
  Logo,
  LogoContent,
  NavbarItems,
  NavbarItem,
  NavbarItemLink,
  Toggler,
  Label,
  ToggleIcon,
} from "./NavBar";

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const untoggle = () => {
    setIsToggled(false);
  };

  const toggleIcon = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Container>
      <Logo>
        <LogoContent href="/portfolio">Z</LogoContent>
      </Logo>
      <Toggler
        id="navbar-toggler"
        type="checkbox"
        checked={isToggled}
      ></Toggler>
      <Label htmlFor="navbar-toggler" onClick={toggleIcon}>
        <ToggleIcon></ToggleIcon>
      </Label>
      <NavbarItems>
        <NavbarItem>
          <NavbarItemLink href="#home" onClick={untoggle}>
            Home
          </NavbarItemLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarItemLink href="#about" onClick={untoggle}>
            About Me
          </NavbarItemLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarItemLink href="#projects" onClick={untoggle}>
            Projects
          </NavbarItemLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarItemLink href="#achievements" onClick={untoggle}>
            Achievements
          </NavbarItemLink>
        </NavbarItem>
      </NavbarItems>
    </Container>
  );
};

export default NavBar;
