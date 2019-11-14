import React from 'react';
import { Progress } from 'semantic-ui-react';
import Heading from '../heading/Heading';
import Particles from 'react-particles-js';
import { particlesOptions } from '../../data/particles';
import {
  SkillsSection,
  SkillsSectionContent,
  SkillsSpan
} from './Skills.styles';
import { skills } from '../../data/data';

const Skills = () => {
  return (
    <>
      <Particles params={particlesOptions} />
      <SkillsSection id='skills'>
        <SkillsSpan>{`<section>`}</SkillsSpan>
        <SkillsSectionContent>
          <Heading
            line1={'My'}
            line2={`Current Skills`}
            line4={'This list is subject to change'}
          />
          <div>
            {skills.map(skill => (
              <Progress percent={skill.percentage} active key={skill.id}>
                {skill.name}
              </Progress>
            ))}
          </div>
        </SkillsSectionContent>
        <SkillsSpan>{`</section>`}</SkillsSpan>
      </SkillsSection>
    </>
  );
};

export default Skills;
