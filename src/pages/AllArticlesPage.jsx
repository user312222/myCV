import React, { useState } from 'react';
import { articlesData } from '../data/articles';

const AllArticlesPage = ({ onBack, onSelectArticle }) => {
  const [activeTag, setActiveTag] = useState(null);

  const allTags = [...new Set(articlesData.flatMap((a) => a.tags))];

  const filtered = activeTag
    ? articlesData.filter((a) => a.tags.includes(activeTag))
    : articlesData;

  return (
    <main className="all-articles-page">
      <div className="all-articles-inner">
        <button className="back-btn" onClick={onBack}>
          ← Back to Home
        </button>

        <header className="all-articles-header">
          <h1 className="section-title">
            All <span className="highlight">Articles</span>
          </h1>
          <p className="all-articles-count">{articlesData.length} articles published</p>
        </header>

        <div className="all-articles-tags">
          <button
            className={`filter-tag ${activeTag === null ? 'active' : ''}`}
            onClick={() => setActiveTag(null)}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-tag ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="all-articles-grid">
          {filtered.map((article) => (
            <article key={article.id} className="article-card all-articles-card">
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
              <p className="article-excerpt">{article.excerpt}</p>

              <div className="article-tags">
                {article.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>

              <div className="article-actions">
                <button
                  className="article-read-more"
                  onClick={() => onSelectArticle(article.id)}
                >
                  Read full article ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllArticlesPage;
