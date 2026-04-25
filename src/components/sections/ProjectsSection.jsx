import React from 'react';
import { projectData } from '../../data/projects';
import ProjectCard from '../project/ProjectCard';

const SectionTitle = ({ children, highlight }) => (
  <h3 className="section-title">
    {children} <span className="highlight">{highlight}</span>
  </h3>
);

const ProjectsSection = ({ onSelectProject }) => {
  return (
    <section id="work">
      <div className="projects-header">
        <SectionTitle highlight="Projects">Featured</SectionTitle>
        <a href="https://github.com/user312222?tab=repositories" target="_blank" className="view-all" rel="noreferrer">
          View All ↗
        </a>
      </div>
      <div className="projects-grid">
        {Object.entries(projectData).map(([key, project]) => (
          <ProjectCard
            key={key}
            projectKey={key}
            project={project}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

