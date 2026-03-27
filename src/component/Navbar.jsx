import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Prakash</h2>
        <div className="nav-links">
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('skills')}>Skills</a>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;