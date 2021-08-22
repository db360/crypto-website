import React from "react";

//ICONS
import { FaBars } from 'react-icons/fa'

//STYLES from NAVBARELEMENTS
import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            {" "}
            <h1>HEY</h1>{" "}
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sigin">Sign In</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
