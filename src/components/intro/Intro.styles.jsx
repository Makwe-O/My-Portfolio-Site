import styled from 'styled-components';

export const IntroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
`;

export const IntroSectionContent = styled.div`
  margin: auto 0 auto 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin: auto 0 auto 5rem;
  }
  @media (max-width: 480px) {
    margin: auto 0 auto 1rem;
  }
`;

export const IntroSectionImage = styled.img`
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 180px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const IntroSpan = styled.span`
  font-family: 'Reenie Beanie', cursive;
`;
