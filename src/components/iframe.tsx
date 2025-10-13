import type React from 'react';
import { cn } from '../utils/cn';

export type IframeProps = {
  src: string;
  title: string;
  className?: string;
};

export const Iframe: React.FC<IframeProps> = ({ src, title, className }) => (
  <iframe
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    className={cn('w-full aspect-video border-0', className)}
    loading="lazy"
    src={src}
    title={title}
  />
);
