import React from 'react';
import { CardContainer, CardImage, CardContent } from './Card.styles';

const Card = ({ img, projectName }) => {
  return (
    <CardContainer>
      <CardImage src={img} alt={projectName} />
      <CardContent class='content'>
        <a href='#' class='header'>
          {projectName}
        </a>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
