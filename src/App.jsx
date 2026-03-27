import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>© 2024 Prakash Mandal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;