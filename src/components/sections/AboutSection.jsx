import React from 'react';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="about-grid-new">
        <div className="glass-panel profile-panel">
          <div className="avatar-circle-large"></div>
          <div className="profile-stats">
            <div className="p-stat">
              <h4>2+</h4>
              <p>Years<br/>Learning</p>
            </div>
            <div className="p-stat">
              <h4>15+</h4>
              <p>Projects<br/>Built</p>
            </div>
            <div className="p-stat">
              <h4>8+</h4>
              <p>Tech<br/>Mastered</p>
            </div>
          </div>
        </div>
        <div className="about-content-panel">
          <h3 className="section-title">
            About <span className="highlight">Me</span>
          </h3>
          <p className="detail-text">
            Self-driven software developer focusing on practical, architecture-driven solutions. Expertise in mobile dev, backend microservices, and AI implementations.
          </p>
          <p className="detail-text">
            Thrives on full-stack projects from UI design to cloud deployment.
          </p>
          <div className="strengths-grid">
            <div className="strength-card">
              <div className="strength-icon">⚡</div>
              <div className="strength-text">
                <h5>Fast Learner</h5>
                <p>Quickly adapts to new tech stacks</p>
              </div>
            </div>
            <div className="strength-card">
              <div className="strength-icon">🧩</div>
              <div className="strength-text">
                <h5>Problem Solver</h5>
                <p>Complex system architecture</p>
              </div>
            </div>
            <div className="strength-card">
              <div className="strength-icon">🏗️</div>
              <div className="strength-text">
                <h5>End-to-End</h5>
                <p>Full-stack to deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

