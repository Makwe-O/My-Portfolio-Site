import React from "react";
import { ReactComponent as BirdLogo } from "../../assets/bird-02.svg";
import {
  NavContainer,
  NavUnorderedList,
  NavItem,
  NavItemLink,
  NavLogo
} from "./Header.styles";
const Header = () => {
  return (
    <NavContainer>
      <NavLogo>
        <BirdLogo />
      </NavLogo>

      <NavUnorderedList>
        <NavItem>
          <NavItemLink href="#" className="fromLeft">
            Resume
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink href="#" className="fromLeft">
            Portfolio
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink href="#" className="fromLeft">
            Contact
          </NavItemLink>
        </NavItem>
      </NavUnorderedList>
    </NavContainer>
  );
};

export default Header;
