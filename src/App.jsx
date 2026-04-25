import React, { useState } from 'react';
import { projectData } from './data/projects';
import { articlesData } from './data/articles';
import { useActiveSection } from './hooks/useActiveSection';
import Sidebar from './components/layout/Sidebar';
import HomePage from './pages/HomePage';
import AllArticlesPage from './pages/AllArticlesPage';
import ProjectDetail from './components/project/ProjectDetail';
import ArticleDetail from './components/article/ArticleDetail';
import './App.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articleSource, setArticleSource] = useState('home');
  const [showAllArticles, setShowAllArticles] = useState(false);

  const isDetailView = Boolean(selectedProject) || Boolean(selectedArticle) || showAllArticles;
  const activeSection = useActiveSection(isDetailView);

  const selectedProjectData = selectedProject ? projectData[selectedProject] : null;
  const selectedArticleData = selectedArticle
    ? articlesData.find((a) => a.id === selectedArticle)
    : null;

  const handleSelectArticle = (id, source = 'home') => {
    setArticleSource(source);
    setSelectedArticle(id);
  };

  const handleArticleBack = () => {
    setSelectedArticle(null);
    if (articleSource === 'list') {
      setShowAllArticles(true);
    }
  };

  return (
    <div className="portfolio-container">
      {!isDetailView && <Sidebar activeSection={activeSection} />}

      {selectedProjectData ? (
        <ProjectDetail
          project={selectedProjectData}
          onBack={() => setSelectedProject(null)}
        />
      ) : selectedArticleData ? (
        <ArticleDetail
          article={selectedArticleData}
          onBack={handleArticleBack}
          source={articleSource}
        />
      ) : showAllArticles ? (
        <AllArticlesPage
          onBack={() => setShowAllArticles(false)}
          onSelectArticle={(id) => handleSelectArticle(id, 'list')}
        />
      ) : (
        <HomePage
          onSelectProject={setSelectedProject}
          onSelectArticle={(id) => handleSelectArticle(id, 'home')}
          onViewAllArticles={() => setShowAllArticles(true)}
        />
      )}
    </div>
  );
}

export default App;
