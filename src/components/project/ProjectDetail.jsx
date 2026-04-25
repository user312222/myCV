import React from 'react';
import CoverImage from '../common/CoverImage.jsx';
import ProjectMeta from './ProjectMeta.jsx';
import ArchitectureList from './ArchitectureList.jsx';

const ProjectDetail = ({ project, onBack }) => {
  return (
    <main className="detail-container">
      <button className="back-btn" onClick={onBack}>
        ← Back to Projects
      </button>

      <header className="detail-header">
        <div className="badge">{project.badge}</div>
        <h1 className="detail-title">{project.title}</h1>
        <p className="hero-subtitle">{project.subtitle}</p>
      </header>

      <CoverImage image={project.coverImage} className="detail-cover" />

      <ProjectMeta project={project} />

      <section className="content-section">
        <h3 className="content-title">Overview</h3>
        {project.overview.map((text, i) => (
          <p key={i} className="detail-text">{text}</p>
        ))}
      </section>

      <section className="content-section two-col-layout">
        <div>
          <h3 className="content-title">Architecture</h3>
          <ArchitectureList architecture={project.architecture} />
          <div className="project-tech">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        <CoverImage image={project.sideImage} className="side-image" />
      </section>
    </main>
  );
};

export default ProjectDetail;

