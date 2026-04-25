import React from 'react';

const ProjectMeta = ({ project }) => (
  <div className="detail-meta-grid">
    <div className="meta-item">
      <div className="meta-label">Role</div>
      <div className="meta-value">{project.role}</div>
    </div>
    <div className="meta-item">
      <div className="meta-label">Timeline</div>
      <div className="meta-value">{project.timeline}</div>
    </div>
    <div className="meta-item">
      <div className="meta-label">Platform</div>
      <div className="meta-value">{project.platform}</div>
    </div>
  </div>
);

export default ProjectMeta;

