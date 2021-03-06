import styled from 'styled-components';
export const NavContainer = styled.div`
  display: flex;
  margin: 1.5em 0;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const NavUnorderedList = styled.ul`
  display: flex;
  padding: 0px;
`;

export const NavItem = styled.li`
  margin: 0rem 1rem;
  list-style-type: none;
`;
export const NavItemLink = styled.a`
  padding: 0.5rem 0rem;
  font-size: 16px;
  color: #1a1a1a;
`;

export const NavLogo = styled.div`
  width: 60px;
`;
