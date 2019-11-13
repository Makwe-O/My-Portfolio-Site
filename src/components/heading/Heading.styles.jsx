import styled, { css } from "styled-components";

const scribble = css`
  font-family: "Reenie Beanie", cursive;
  font-size: 1em;
  color: #9a9a9a;
`;
export const Header1 = styled.h1`
  font-size: 4em;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 3em;
  }
  @media (max-width: 480px) {
    font-size: 2.5em;
  }
`;

export const Header1Container = styled.div`
  &:before {
    content: " <h1>";
    ${scribble}
  }
  &:after {
    content: " </h1>";
    ${scribble}
  }
`;
