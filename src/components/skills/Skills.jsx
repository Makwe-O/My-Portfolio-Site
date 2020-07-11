import React from 'react';
import Heading from '../heading/Heading';
import Particles from 'react-particles-js';
import { particlesOptions } from '../../data/particles';
import {
  SkillsSection,
  SkillsSectionContent,
  SkillsSpan,
  SkillsSectionContentList,
  SkillsSectionContentText,
} from './Skills.styles';
import { skills } from '../../data/data';

const Skills = () => {
  return (
    <>
      <Particles params={particlesOptions} />
      <SkillsSection id="skills">
        <SkillsSpan>{`<section>`}</SkillsSpan>
        <SkillsSectionContent>
          <Heading
            line1={'My'}
            line2={`Current Skills`}
            line4={'This list is subject to change'}
          />
          <SkillsSectionContentList>
            {skills.map((skill, index) => (
              <SkillsSectionContentText key={index}>
                {' '}
                {skill.name}
              </SkillsSectionContentText>
            ))}
          </SkillsSectionContentList>
        </SkillsSectionContent>
        <SkillsSpan>{`</section>`}</SkillsSpan>
      </SkillsSection>
    </>
  );
};

export default Skills;
