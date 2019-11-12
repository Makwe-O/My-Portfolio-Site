import React from 'react';
import Particles from 'react-particles-js';
import { particlesOptions } from './data/particles';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <>
      <Particles params={particlesOptions} />
      <LandingPage />
    </>
  );
}

export default App;
