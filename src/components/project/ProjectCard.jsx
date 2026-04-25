import React from 'react';

const ProjectCard = ({ projectKey, project, onSelectProject }) => {
  return (
    <article className="project-card" onClick={() => onSelectProject(projectKey)}>
      <div 
        className="project-image"
        style={{
          backgroundImage: `url(${project.coverImage}), linear-gradient(to bottom right, ${getGradientColor(projectKey)}, rgba(15,23,42,1))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="project-content">
        <h4 className="project-title">{project.title}</h4>
        <p className="project-desc">{project.subtitle}</p>
        <div className="project-tech">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <span 
            className="project-link" 
            onClick={(e) => e.stopPropagation()}
            style={{opacity: 0.7}}
          >
            GitHub ↗
          </span>
          <span className="project-link" style={{cursor: 'pointer'}}>
            Details ↗
          </span>
        </div>
      </div>
    </article>
  );
};

const getGradientColor = (key) => {
  const gradients = {
    fitwai: 'rgba(96,165,250,0.4)',
    cloud: 'rgba(136,36,135,0.4)',
    sabun: 'rgba(253,186,116,0.2)'
  };
  return gradients[key] || 'rgba(8,145,178,0.4)';
};

export default ProjectCard;

