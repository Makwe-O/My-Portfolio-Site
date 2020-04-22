import React from 'react';
import { Image, Modal } from 'semantic-ui-react';
import {
  PortfolioSection,
  PortfolioSectionContent,
  PortfolioSpan,
  PortfolioModal,
  PortfolioLink,
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

      <PortfolioSection id='portfolio'>
        <PortfolioSpan>{`<section>`}</PortfolioSpan>
        <PortfolioSectionContent>
          <Heading line1={'Portfolio'} />
          <div className='ui stackable four column grid'>
            {data.map((d) => (
              <div className='column' key={d.id}>
                <Modal
                  size={'small'}
                  centered={false}
                  trigger={
                    <PortfolioModal>
                      <Card img={d.img} projectName={d.name} />
                    </PortfolioModal>
                  }>
                  <Modal.Header>{d.name}</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' src={d.img} />
                    <Modal.Description>
                      <div>
                        <span>
                          <strong>Description</strong>:{' '}
                        </span>
                        <span>{d.description}</span>
                      </div>
                      <div>
                        <span>
                          <strong>Technologies Used</strong>:{' '}
                        </span>
                        {d.stacks.map((stack) => (
                          <span key={stack}>{stack}, </span>
                        ))}
                      </div>
                      <PortfolioLink>
                        <a
                          href={d.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='fromLeft'>
                          View Site
                        </a>
                        <a
                          href={d.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`fromLeft ${d.github ? '' : 'disabled'}`}>
                          Github
                        </a>
                      </PortfolioLink>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
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
