import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden !important;
  max-width: 24rem;
  border-radius: 0.25rem;
  border: 0 solid #e2e8f0;
`;

export const CardImage = styled.img`
  height: 174px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
`;
