import styled from 'styled-components';

export const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 3em 0;
`;
export const SkillsSectionContent = styled.div`
  margin: 7rem 0 7rem 10rem;
  @media (max-width: 768px) {
    margin: 4rem 0 4rem 5rem;
  }
  @media (max-width: 480px) {
    margin: auto 0 auto 1rem;
  }
`;
export const SkillsSectionContentList = styled.div`
  display: grid;
  column-gap: 3rem;
  row-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export const SkillsSectionContentText = styled.h3`
  font-size: 2rem;
  margin: 0px;
`;

export const SkillsSpan = styled.span`
  font-family: 'Reenie Beanie', cursive;
`;
