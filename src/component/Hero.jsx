import React from 'react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Prakash Mondal</span>
        </h1>
        <p className="hero-subtitle">
          Java Developer | Spring Boot | PHP | React
        </p>
        <button onClick={scrollToProjects} className="hero-button">
          View Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;