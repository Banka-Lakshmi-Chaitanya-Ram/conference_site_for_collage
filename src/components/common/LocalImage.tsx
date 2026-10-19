import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface LocalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackText?: string;
  className?: string;
  aspectRatio?: string;
}

export const LocalImage: React.FC<LocalImageProps> = ({
  src,
  alt,
  fallbackText,
  className = '',
  aspectRatio,
  style,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`image-placeholder ${className}`}
        style={{
          aspectRatio: aspectRatio || '16 / 9',
          ...style
        }}
        role="img"
        aria-label={alt}
      >
        <div className="placeholder-inner">
          <ImageIcon className="placeholder-icon" size={32} />
          <span className="placeholder-label">{fallbackText || alt}</span>
          <span className="placeholder-hint">Local institutional asset slot</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`local-image-wrapper ${className}`}
      style={{
        aspectRatio: aspectRatio,
        ...style
      }}
    >
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
        className={`local-image ${isLoading ? 'is-loading' : 'is-loaded'}`}
        {...rest}
      />
    </div>
  );
};
