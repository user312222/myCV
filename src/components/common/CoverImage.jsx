import React from 'react';

const CoverImage = ({ image, className = '' }) => (
  <div 
    className={className}
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  />
);

export default CoverImage;

