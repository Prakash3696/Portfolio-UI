import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'File Storage System Application',
      tech: 'Java, Spring Boot, React, MySQL',
      github: 'https://github.com/Prakash3696/File-Storage-System-Backend-',
      description: 'A secure file storage system with upload, download, and management features.'
    },
    {
      title: 'Ecommerce Website',
      tech: 'Java, Spring Boot, MySQL',
      github: 'https://github.com/Prakash3696/Ecommerce-Backend-',
      description: 'Full-featured ecommerce backend with product management and order processing.'
    },
    {
      title: 'Referral Detection System',
      tech: 'Java, Spring Boot, MySQL',
      github: 'https://github.com/Prakash3696/Referral-Detection',
      description: 'System to detect and prevent duplicate candidate referrals to companies.'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  <span>View on GitHub →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;