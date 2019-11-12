import React from 'react';
import { IntroSection, IntroSectionContent, IntroSpan } from './Intro.styles';
import Heading from '../heading/Heading';

const Intro = () => {
  return (
    <IntroSection>
      <IntroSpan>{`<body>`}</IntroSpan>
      <IntroSectionContent>
        <Heading
          line1={'Hello,'}
          line2={`I'm Onyeka`}
          line3={'Software Engineer'}
        />
      </IntroSectionContent>
    </IntroSection>
  );
};

export default Intro;
