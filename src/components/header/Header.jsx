import React from 'react';
import { ReactComponent as BirdLogo } from '../../assets/bird-02.svg';
import {
  NavContainer,
  NavUnorderedList,
  NavItem,
  NavItemLink
} from './Header.styles';
const Header = () => {
  return (
    <NavContainer>
      <div className=''>
        <a href='#'>Bird Logo</a>
      </div>
      <NavUnorderedList>
        <NavItem>
          <NavItemLink href='#'>Resume</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink href='#'>Portfolio</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink href='#'>Contact</NavItemLink>
        </NavItem>
      </NavUnorderedList>
    </NavContainer>
  );
};

export default Header;
