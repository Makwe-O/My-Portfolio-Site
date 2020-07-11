import React from 'react';
import { CardContainer, CardImage, CardContent } from './Card.styles';

const Card = ({ img, projectName }) => {
  return (
    <CardContainer>
      <CardImage src={img} alt={projectName} />
      <CardContent className="content">{projectName}</CardContent>
    </CardContainer>
  );
};

export default Card;
