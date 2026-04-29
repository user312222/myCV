import React, { useState } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ArticlesSection from '../components/sections/ArticlesSection';
import ContactSection from '../components/sections/ContactSection';

const MobileSection = ({ label, isOpen, onToggle, children }) => (
  <div className="mobile-collapsible">
    <button
      className={`mobile-collapsible-btn${isOpen ? ' open' : ''}`}
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span>{label}</span>
      <span className="mobile-collapsible-arrow">{isOpen ? '−' : '+'}</span>
    </button>
    <div className={`mobile-collapsible-body${isOpen ? ' open' : ''}`}>
      {children}
    </div>
  </div>
);

const HomePage = ({ onSelectProject, onSelectArticle, onViewAllArticles }) => {
  const [openSections, setOpenSections] = useState({
    about: true,
    skills: true,
    work: true,
    articles: true,
    contact: true,
  });

  const toggle = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <main className="main-content">
      <HeroSection />
      <MobileSection label="About Me" isOpen={openSections.about} onToggle={() => toggle('about')}>
        <AboutSection />
      </MobileSection>
      <MobileSection label="Technical Skills" isOpen={openSections.skills} onToggle={() => toggle('skills')}>
        <SkillsSection />
      </MobileSection>
      <MobileSection label="Projects" isOpen={openSections.work} onToggle={() => toggle('work')}>
        <ProjectsSection onSelectProject={onSelectProject} />
      </MobileSection>
      <MobileSection label="Articles" isOpen={openSections.articles} onToggle={() => toggle('articles')}>
        <ArticlesSection onSelectArticle={onSelectArticle} onViewAll={onViewAllArticles} />
      </MobileSection>
      <MobileSection label="Contact" isOpen={openSections.contact} onToggle={() => toggle('contact')}>
        <ContactSection />
      </MobileSection>
    </main>
  );
};

export default HomePage;
