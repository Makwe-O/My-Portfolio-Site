import React from 'react';
import { useSpring, animated } from 'react-spring';
import { IntroSection, IntroSectionContent, IntroSpan } from './Intro.styles';
import Heading from '../heading/Heading';

const Intro = () => {
  const introAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000
  });
  return (
    <animated.div style={introAnimation}>
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
    </animated.div>
  );
};

export default Intro;
