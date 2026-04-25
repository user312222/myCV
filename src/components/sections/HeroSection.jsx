import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-particles"></div>
      <div className="hero-grid">
        <div className="hero-content">
          <div className="badge">
            <span className="pulse-dot"></span>
            AVAILABLE FOR PROJECTS & ROLES
          </div>
          <h1 className="hero-title">
            <span className="title-line line-1">Hi, I'm</span>
            <span className="title-line line-2 gradient-text">Işıl</span>
          </h1>
          <h2 className="hero-subtitle line-3">
            Software Developer <span className="separator">|</span> Mobile <span className="separator">|</span> AI
          </h2>
          <p className="hero-desc line-4">
            I build modern, scalable digital products end-to-end. From cross-platform mobile apps to AI-driven microservices, turning complex ideas into polished realities.
          </p>
          <div className="button-group">
            <a href="#work" className="btn-primary glow-btn">View My Projects <span className="arrow">↗</span></a>
            <a href="/cv.pdf" className="btn-secondary glow-btn">Download CV <span className="arrow">↓</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="mac-terminal">
            <div className="mac-header">
              <div className="mac-dot red"></div>
              <div className="mac-dot yellow"></div>
              <div className="mac-dot green"></div>
            </div>
            <div className="terminal-body typewriter">
              <div className="code-line"><span className="keyword">class</span> <span className="class-name">Işıl</span> <span className="keyword">extends</span> <span className="class-name">Developer</span> &#123;</div>
              <div className="code-line indented">constructor() &#123;</div>
              <div className="code-line double-indented"><span className="keyword">this</span>.skills = [<span className="string">"Swift"</span>, <span className="string">"Flutter"</span>, <span className="string">"React"</span>, <span className="string">"AI"</span>];</div>
              <div className="code-line double-indented"><span className="keyword">this</span>.passion = <span className="string">"Architecture"</span>;</div>
              <div className="code-line indented">&#125;</div>
              <div className="code-line indented"><span className="function">build</span>() &#123;</div>
              <div className="code-line double-indented"><span className="keyword">return</span> <span className="string">"Scalable Systems ✨"</span>;</div>
              <div className="code-line indented">&#125;</div>
              <div className="code-line">&#125;</div>
              <div className="cursor">█</div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
    </section>
  );
};

export default HeroSection;

