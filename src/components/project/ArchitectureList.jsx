import React from 'react';

const ArchitectureList = ({ architecture }) => (
  <div className="architecture-box">
    <ul className="architecture-list">
      {architecture.map((item, i) => (
        <li key={i}>
          <strong>{item.name}</strong> {item.desc}
        </li>
      ))}
    </ul>
  </div>
);

export default ArchitectureList;

