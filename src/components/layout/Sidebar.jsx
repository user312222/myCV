import React from 'react';

const Sidebar = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work' },
    { id: 'articles', label: 'Articles' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="sidebar">
      <div className="logo">I</div>
      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;

