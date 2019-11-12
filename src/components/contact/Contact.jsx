import React from 'react';
import {
  ContactSection,
  ContactSectionContent,
  ContactSpan
} from './Contact.styles';
import Heading from '../heading/Heading';

const Contact = () => {
  return (
    <ContactSection>
      <ContactSpan>{`<section>`}</ContactSpan>
      <ContactSectionContent>
        <Heading line1={'Wanna'} line2={`Get In Touch`} />
      </ContactSectionContent>
      <ContactSpan>{`</section>`}</ContactSpan>
    </ContactSection>
  );
};

export default Contact;
