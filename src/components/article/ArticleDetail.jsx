import React, { useEffect, useState } from 'react';

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="reading-progress-track">
      <div className="reading-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

const ArticleDetail = ({ article, onBack }) => {
  return (
    <>
      <ReadingProgress />
      <main className="article-reader">
        <button className="back-btn" onClick={onBack}>
          ← Back to Articles
        </button>

        <header className="article-reader-header">
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

          <h1 className="article-reader-title">{article.title}</h1>

          <div className="article-reader-meta">
            <span>{article.date}</span>
            <span className="article-meta-dot">·</span>
            <span>{article.readTime}</span>
            <span className="article-meta-dot">·</span>
            <span>{article.sections.length} sections</span>
          </div>

          <div className="article-reader-tags">
            {article.tags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </header>

        <div className="article-reader-lead">
          <p>{article.excerpt}</p>
        </div>

        <div className="article-reader-body">
          {article.sections.map((section, index) => (
            <section key={section.heading} className="article-reader-section">
              <div className="article-reader-section-header">
                <span className="article-section-number">0{index + 1}</span>
                <h2 className="article-reader-heading">{section.heading}</h2>
              </div>
              <div className="article-reader-content">
                {section.body.split('\n\n').map((para, i) => (
                  <p key={i} className="article-reader-paragraph">{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="article-reader-footer">
          <button className="back-btn" onClick={onBack}>
            ← Back to Articles
          </button>
        </footer>
      </main>
    </>
  );
};

export default ArticleDetail;
