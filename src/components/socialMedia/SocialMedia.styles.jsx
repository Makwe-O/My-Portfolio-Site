import styled from "styled-components";

export const SocialAnchor = styled.a`
  margin-right: 2rem;
`;

export const SocialImage = styled.img`
  max-width: 40px;
  @media (max-width: 768px) {
    max-width: 35px;
  }
  @media (max-width: 480px) {
    max-width: 25px;
  }
`;
