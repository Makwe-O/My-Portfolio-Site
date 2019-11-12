import React from 'react';
import { Header1, Header1Container } from './Heading.styles';
const Heading = ({ line1, line2, line3 }) => {
  return (
    <Header1Container>
      <Header1>{line1}</Header1>
      <Header1>{line2}</Header1>
      {line3 ? <Header1>{line3}</Header1> : null}
    </Header1Container>
  );
};

export default Heading;
