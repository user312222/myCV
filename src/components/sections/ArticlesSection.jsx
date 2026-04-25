import React, { useState } from 'react';
import { articlesData } from '../../data/articles';

const ArticleCard = ({ article, onSelectArticle }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="article-card">
      <div className="article-top">
        <span
          className="article-badge"
          style={{
            color: article.badgeColor,
            borderColor: `${article.badgeColor}33`,
            backgroundColor: `${article.badgeColor}11`,
          }}
        >
          {article.badge}
        </span>
        <span className="article-date">{article.date} · {article.readTime}</span>
      </div>

      <h4 className="article-title">{article.title}</h4>

      {!expanded ? (
        <p className="article-excerpt">{article.excerpt}</p>
      ) : (
        <div className="article-full-content">
          {article.sections.map((section) => (
            <div key={section.heading} className="article-section">
              <h5 className="article-section-heading">{section.heading}</h5>
              {section.body.split('\n\n').map((para, i) => (
                <p key={i} className="article-section-body">{para}</p>
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="article-tags">
        {article.tags.map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>

      <div className="article-actions">
        <button
          className="article-toggle"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? 'Show less ↑' : 'Read summary ↓'}
        </button>
        <button
          className="article-read-more"
          onClick={() => onSelectArticle(article.id)}
        >
          Read full article ↗
        </button>
      </div>
    </article>
  );
};

const ArticlesSection = ({ onSelectArticle, onViewAll }) => {
  return (
    <section id="articles">
      <div className="projects-header">
        <h3 className="section-title">
          Latest <span className="highlight">Articles</span>
        </h3>
        <button className="view-all" onClick={onViewAll}>
          View All →
        </button>
      </div>
      <div className="articles-list">
        {articlesData.slice(0, 3).map((article) => (
          <ArticleCard key={article.id} article={article} onSelectArticle={onSelectArticle} />
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
