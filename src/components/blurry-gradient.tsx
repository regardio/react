import type { SVGProps } from 'react';

export interface BlurryGradientProps extends SVGProps<SVGSVGElement> {
  primaryColor: string;
  secondaryColor: string;
  neutralColor: string;
  /**
   * Accessible description for the gradient (for screen readers)
   * @default 'Decorative blurry gradient'
   */
  description?: string;
}

export const BlurryGradient = (props: BlurryGradientProps) => {
  const { description = 'Decorative blurry gradient', ...svgProps } = props;
  const titleId = 'blurryGradientTitle';

  return (
    <svg
      aria-labelledby={titleId}
      preserveAspectRatio="none"
      role="img"
      viewBox="0 0 1000 1000"
      {...svgProps}
    >
      <title id={titleId}>{description}</title>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="120%"
          width="120%"
          x="-10%"
          y="-10%"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />
          <feGaussianBlur
            result="effect1_foregroundBlur"
            stdDeviation="161"
          />
        </filter>
      </defs>
      <rect
        fill={props.primaryColor}
        height="1000"
        width="1000"
      />
      <g filter="url(#blurryGradient)">
        <circle
          cx="730"
          cy="559"
          fill={props.secondaryColor}
          r="357"
        />
        <circle
          cx="316"
          cy="248"
          fill={props.primaryColor}
          r="357"
        />
        <circle
          cx="509"
          cy="410"
          fill={props.neutralColor}
          r="357"
        />
        <circle
          cx="633"
          cy="232"
          fill={props.secondaryColor}
          r="357"
        />
        <circle
          cx="156"
          cy="82"
          fill={props.primaryColor}
          r="357"
        />
        <circle
          cx="150"
          cy="389"
          fill={props.neutralColor}
          r="357"
        />
      </g>
    </svg>
  );
};
