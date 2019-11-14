import React from 'react';
import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import Portfolio from '../../components/portfolio/Portfolio';
import Contact from '../../components/contact/Contact';
import Skills from '../../components/skills/Skills';

const LandingPage = () => {
  return (
    <div className='ui container'>
      <Header />
      <Intro />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
};

export default LandingPage;
