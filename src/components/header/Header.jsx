import React from 'react';
import Scrollspy from 'react-scrollspy';
import { ReactComponent as BirdLogo } from '../../assets/bird-02.svg';
import {
  NavContainer,
  NavUnorderedList,
  NavItem,
  NavItemLink,
  NavLogo
} from './Header.styles';
const Header = () => {
  return (
    <NavContainer>
      <NavLogo>
        <BirdLogo />
      </NavLogo>

      <Scrollspy
        items={['portfolio', 'skills', 'contact']}
        currentClassName='is-current'
      >
        <NavUnorderedList>
          <NavItem>
            <NavItemLink
              href='https://drive.google.com/open?id=18q-aujpLYIdFtqzUWuw2a9oylnNt02p-'
              className='fromLeft'
              download
            >
              Resume
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href='#portfolio' className='fromLeft'>
              Portfolio
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href='#skills' className='fromLeft'>
              Skills
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink href='#contact' className='fromLeft'>
              Contact
            </NavItemLink>
          </NavItem>
        </NavUnorderedList>
      </Scrollspy>
    </NavContainer>
  );
};

export default Header;
