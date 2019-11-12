import styled, { css } from 'styled-components';

const scribble = css`
  font-family: 'Reenie Beanie', cursive;
  font-size: 1em;
  color: #9a9a9a;
`;
export const Header1 = styled.h1`
  font-size: 4em;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  font-family: 'Poppins', sans-serif;
`;

export const Header1Container = styled.div`
  &:before {
    content: ' <h1>';
    ${scribble}
  }
  &:after {
    content: ' </h1>';
    ${scribble}
  }
`;
