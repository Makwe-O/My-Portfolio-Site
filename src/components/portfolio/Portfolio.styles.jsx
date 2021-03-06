import styled from 'styled-components';

export const PortfolioSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 3em 0;
`;

export const PortfolioSectionContent = styled.div`
  margin: 7rem 0 7rem 10rem;
  @media (max-width: 768px) {
    margin: 4rem 0 4rem 5rem;
  }
  @media (max-width: 480px) {
    margin: auto 0 auto 1rem;
  }
`;
export const PortfolioSectionGrid = styled.div`
  display: grid;
  column-gap: 3rem;
  row-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export const PortfolioLink = styled.div`
padding:2em 0
display:flex;
justify-content:space-around`;

export const PortfolioSpan = styled.span`
  font-family: 'Reenie Beanie', cursive;
`;

export const PortfolioModal = styled.div`
  cursor: pointer;
`;
