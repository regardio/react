import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const highlightVariants = {
  primary: ['highlight'],
} as const;

const highlight = tv({
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: highlightVariants,
  },
});

export type HighlightVariant = keyof typeof highlightVariants;

export interface HighlightProps extends ComponentProps<'mark'> {
  variant?: HighlightVariant;
}

export const Highlight = ({ children, className, variant }: HighlightProps) => {
  return (
    <mark
      className={highlight({
        className,
        variant,
      })}
    >
      {children}

      <svg
        aria-label="!"
        role="img"
      >
        <defs>
          <filter>
            <feTurbulence
              baseFrequency="0 0.2"
              numOctaves="5"
              result="warp"
              type="fractalNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="warp"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </mark>
  );
};
