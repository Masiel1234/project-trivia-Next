'use client';

import Image from 'next/image';

interface AnimeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const AnimeImage = ({
  src,
  alt,
  width = 500,
  height = 500,
  className = '',
}: AnimeImageProps) => {
  
  return  (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
