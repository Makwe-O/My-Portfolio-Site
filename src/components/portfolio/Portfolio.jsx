import React from 'react';
import {
  PortfolioSection,
  PortfolioSectionContent,
  PortfolioSpan
} from './Portfolio.styles';
import Heading from '../heading/Heading';
import { data } from '../../data/data';
import Card from '../card/Card';
import Particles from 'react-particles-js';
import { particlesOptions } from '../../data/particles';

const Portfolio = () => {
  return (
    <>
      <Particles params={particlesOptions} />
      <PortfolioSection>
        <PortfolioSpan>{`<section>`}</PortfolioSpan>
        <PortfolioSectionContent>
          <Heading line1={'Some'} line2={`of my work`} />
          <div class='ui stackable four column grid'>
            {data.map(d => (
              <div className='column' key={d.id}>
                <Card img={d.img} projectName={d.name} />
              </div>
            ))}
          </div>
        </PortfolioSectionContent>
        <PortfolioSpan>{`</section>`}</PortfolioSpan>
      </PortfolioSection>
    </>
  );
};

export default Portfolio;
