import styled from "styled-components";

export const PortfolioSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 3em 0;
`;

export const PortfolioSectionContent = styled.div`
  margin: auto 0 auto 10rem;
  @media (max-width: 768px) {
    margin: auto 0 auto 5rem;
  }
  @media (max-width: 480px) {
    margin: auto 0 auto 1rem;
  }
`;

export const PortfolioSpan = styled.span`
  font-family: "Reenie Beanie", cursive;
`;

export const PortfolioModal = styled.div`
  cursor: pointer;
`;
