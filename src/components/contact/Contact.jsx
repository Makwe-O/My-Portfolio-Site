import React from 'react';
import {
  ContactSection,
  ContactSectionContent,
  ContactSpan,
  ContactSocial
} from './Contact.styles';
import Heading from '../heading/Heading';
import SocialMedia from '../socialMedia/SocialMedia';
import { icons } from '../../data/data';
import Particles from 'react-particles-js';
import { particlesOptions } from '../../data/particles';

const Contact = () => {
  return (
    <>
      <Particles params={particlesOptions} />
      <ContactSection>
        <ContactSpan>{`<section>`}</ContactSpan>
        <ContactSectionContent>
          <Heading line1={'Wanna'} line2={`Get In Touch`} />
          <ContactSocial>
            {icons.map(icon => (
              <SocialMedia
                name={icon.name}
                link={icon.link}
                url={icon.url}
                mail={icon.mail}
              />
            ))}
          </ContactSocial>
        </ContactSectionContent>
        <ContactSpan>{`</section>`}</ContactSpan>
      </ContactSection>
    </>
  );
};

export default Contact;
