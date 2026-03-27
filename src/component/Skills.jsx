import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Java', color: '#f89820' },
    { name: 'Spring Boot', color: '#6db33f' },
    { name: 'PHP', color: '#777bb4' },
    { name: 'React', color: '#61dafb' },
    { name: 'JavaScript', color: '#f7df1e' },
    { name: 'MySQL', color: '#4479a1' },
    { name: 'REST APIs', color: '#ff6b6b' },
    { name: 'Git', color: '#f05032' },
    { name: 'Postman', color: '#ff6c37' },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ borderColor: skill.color }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.name.substring(0, 2).toUpperCase()}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;