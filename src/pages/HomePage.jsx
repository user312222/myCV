import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ArticlesSection from '../components/sections/ArticlesSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = ({ onSelectProject, onSelectArticle, onViewAllArticles }) => {
  return (
    <main className="main-content">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection onSelectProject={onSelectProject} />
      <ArticlesSection onSelectArticle={onSelectArticle} onViewAll={onViewAllArticles} />
      <ContactSection />
    </main>
  );
};

export default HomePage;

