import React from 'react';

const skillsData = [
  { name: 'Flutter & Dart', level: 'Mobile', color: '#60a5fa' },
  { name: 'React / Next.js', level: 'Frontend', color: '#22d3ee' },
  { name: 'Python FastAPI', level: 'Backend', color: '#34d399' },
  { name: 'Firebase AWS', level: 'Cloud', color: '#fb923c' },
  { name: 'PyTorch CV', level: 'AI/ML', color: '#c084fc' },
  { name: 'Tailwind UI/UX', level: 'Design', color: '#f472b6' },
  { name: 'Docker Linux', level: 'DevOps', color: '#94a3b8' },
  { name: 'JavaScript ES6+', level: 'Core', color: '#facc15' }
];

const SkillsSection = () => {
  return (
    <section id="skills">
      <h3 className="section-title">
        Technical <span className="highlight">Skills</span>
      </h3>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-name" style={{ color: skill.color }}>
              {skill.name}
            </div>
            <div className="skill-level">{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

