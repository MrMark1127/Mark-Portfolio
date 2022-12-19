import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LandingPage from './components/Pages/LandingPage';
import About from './components/Pages/About';
import Skills from './components/Pages/Skills';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';

library.add(fas, faTwitter, faFontAwesome, faGithub, faLinkedin)

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
