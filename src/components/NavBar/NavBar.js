import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  background: rgb(219, 219, 219);
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
`;

export const NavbarItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  min-width: 50vw;
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
