import React, { useState } from 'react';
import { motion } from 'motion/react';

interface PremiumImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  sizeHint?: 'thumbnail' | 'medium' | 'large';
}

// Helper to optimize Unsplash image sizes to prevent serving overly massive files (improving CLS & web vitals)
const getOptimizedUrl = (url: string, hint?: 'thumbnail' | 'medium' | 'large') => {
  if (!url) return url;
  if (!url.includes('images.unsplash.com')) return url;
  
  try {
    const urlObj = new URL(url);
    
    // Choose optimal width based on layout position sizeHint
    let targetWidth = '600';
    if (hint === 'thumbnail') targetWidth = '180';
    else if (hint === 'medium') targetWidth = '480';
    else if (hint === 'large') targetWidth = '960';
    
    urlObj.searchParams.set('w', targetWidth);
    urlObj.searchParams.set('q', '75'); // Optimize compression with zero visual quality degradation
    urlObj.searchParams.set('auto', 'format'); // Dynamically support modern, efficient formats like AVIF/WebP
    urlObj.searchParams.set('fit', 'crop');
    
    return urlObj.toString();
  } catch (e) {
    return url;
  }
};

export const PremiumImage: React.FC<PremiumImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop',
  sizeHint = 'medium',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const initialSrc = hasError ? fallbackSrc : (src || fallbackSrc);
  const finalSrc = getOptimizedUrl(initialSrc, sizeHint as 'thumbnail' | 'medium' | 'large');

  return (
    <div className={`relative overflow-hidden bg-orange-50/50 ${className}`}>
      {/* Skeleton Loader */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <img
        src={finalSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
};
