// components/OptimizedImage.js
import React from 'react';

const imageTypes = {
  hero: { width: 1200, height: 800 },
  slide: { width: 800, height: 600 },
  feature: { width: 400, height: 300 },
  logo: { width: 200, height: 200 }
};

const OptimizedImage = ({ src, alt, type = 'slide', className = '' }) => {
  const { width, height } = imageTypes[type];
  const fileName = src.split('/').pop().split('.')[0];
  const optimizedSrc = `/images/${fileName}-${type}.webp`;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      loading={type === 'hero' ? 'eager' : 'lazy'}
      className={`optimized-image ${className}`}
    />
  );
};

export default OptimizedImage;