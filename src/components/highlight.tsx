import type { ComponentProps } from 'react';
import { cva, type VariantProps } from '../utils/cn';

const li = cva({
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: ['highlight'],
    },
  },
});

export interface HighlightProps extends ComponentProps<'mark'>, VariantProps<typeof li> {}

export const Highlight = (props: HighlightProps) => {
  const { children, className, variant } = props;

  return (
    <mark
      className={li({
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
