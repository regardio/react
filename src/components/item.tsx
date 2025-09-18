import type { ComponentProps, ElementType } from 'react';
import { cva, type VariantProps } from '../utils/cn';
import { Link } from './link';

export const priorities = {
  high: [],
  low: [],
  medium: [],
};

export const paddingValues = {
  default: '',
  gutter: 'p-grid-gutter',
};

export const width = {
  full: ['col-span-12'],
  lg: ['col-span-12', '@xs:col-span-8', '@md:col-span-8', '@xl:col-span-8'],
  md: ['col-span-12', '@xs:col-span-6', '@md:col-span-6', '@xl:col-span-6'],
  sm: ['col-span-6', '@xs:col-span-6', '@md:col-span-4', '@xl:col-span-4'],
  xl: ['col-span-12', '@xs:col-span-8', '@md:col-span-9', '@xl:col-span-10'],
  xs: ['col-span-6', '@xs:col-span-4', '@md:col-span-3', '@xl:col-span-2'],
};

export const height = {
  1: ['row-span-1'],
  2: ['row-span-2'],
  3: ['row-span-3'],
  4: ['row-span-4'],
  5: ['row-span-5'],
  6: ['row-span-6'],
};

export const themeColors = {
  black: [],
  blue: [],
  coral: [],
  cyan: [],
  gray: [],
  green: [],
  lime: [],
  neutral: [],
  olive: [],
  orange: [],
  pink: [],
  purple: [],
  red: [],
  teal: [],
  unstyled: [],
  white: [],
  yellow: [],
};

const item = cva({
  base: ['relative'],
  compoundVariants: [
    {
      className: ['bg-gray-300/20', 'black:bg-black/20'],
      priority: 'low',
      themeColor: 'black',
    },
    {
      className: ['bg-gray-300/50', 'black:bg-black/50'],
      priority: 'medium',
      themeColor: 'black',
    },
    {
      className: ['bg-gray-300/90', 'black:bg-black/90'],
      priority: 'high',
      themeColor: 'black',
    },
    {
      className: ['bg-blue-300/20', 'black:bg-blue-500/20'],
      priority: 'low',
      themeColor: 'blue',
    },
    {
      className: ['bg-blue-300/50', 'black:bg-blue-500/50'],
      priority: 'medium',
      themeColor: 'blue',
    },
    {
      className: ['bg-blue-300/90', 'black:bg-blue-500/80'],
      priority: 'high',
      themeColor: 'blue',
    },
    {
      className: ['bg-coral-300/20', 'black:bg-coral-500/20'],
      priority: 'low',
      themeColor: 'coral',
    },
    {
      className: ['bg-coral-300/50', 'black:bg-coral-500/50'],
      priority: 'medium',
      themeColor: 'coral',
    },
    {
      className: ['bg-coral-300/90', 'black:bg-coral-500/80'],
      priority: 'high',
      themeColor: 'coral',
    },
    {
      className: ['bg-cyan-300/20', 'black:bg-cyan-500/20'],
      priority: 'low',
      themeColor: 'cyan',
    },
    {
      className: ['bg-cyan-300/50', 'black:bg-cyan-500/50'],
      priority: 'medium',
      themeColor: 'cyan',
    },
    {
      className: ['bg-cyan-300/90', 'black:bg-cyan-500/80'],
      priority: 'high',
      themeColor: 'cyan',
    },
    {
      className: ['bg-green-300/20', 'black:bg-green-500/20'],
      priority: 'low',
      themeColor: 'green',
    },
    {
      className: ['bg-green-300/50', 'black:bg-green-500/50'],
      priority: 'medium',
      themeColor: 'green',
    },
    {
      className: ['bg-green-300/90', 'black:bg-green-500/80'],
      priority: 'high',
      themeColor: 'green',
    },
    {
      className: ['bg-lime-300/20', 'black:bg-lime-500/20'],
      priority: 'low',
      themeColor: 'lime',
    },
    {
      className: ['bg-lime-300/50', 'black:bg-lime-500/50'],
      priority: 'medium',
      themeColor: 'lime',
    },
    {
      className: ['bg-lime-300/90', 'black:bg-lime-500/80'],
      priority: 'high',
      themeColor: 'lime',
    },
    {
      className: ['bg-gray-100/40', 'black:bg-gray-500/5'],
      priority: 'low',
      themeColor: 'neutral',
    },
    {
      className: ['bg-gray-200/30', 'black:bg-gray-500/20'],
      priority: 'medium',
      themeColor: 'neutral',
    },
    {
      className: ['bg-gray-300/70', 'black:bg-gray-500/50'],
      priority: 'high',
      themeColor: 'neutral',
    },
    {
      className: ['bg-olive-300/20', 'black:bg-olive-500/20'],
      priority: 'low',
      themeColor: 'olive',
    },
    {
      className: ['bg-olive-300/50', 'black:bg-olive-500/50'],
      priority: 'medium',
      themeColor: 'olive',
    },
    {
      className: ['bg-olive-300/90', 'black:bg-olive-500/80'],
      priority: 'high',
      themeColor: 'olive',
    },
    {
      className: ['bg-orange-300/20', 'black:bg-orange-500/20'],
      priority: 'low',
      themeColor: 'orange',
    },
    {
      className: ['bg-orange-300/50', 'black:bg-orange-500/50'],
      priority: 'medium',
      themeColor: 'orange',
    },
    {
      className: ['bg-orange-300/90', 'black:bg-orange-500/80'],
      priority: 'high',
      themeColor: 'orange',
    },
    {
      className: ['bg-pink-300/20', 'black:bg-pink-500/20'],
      priority: 'low',
      themeColor: 'pink',
    },
    {
      className: ['bg-pink-300/50', 'black:bg-pink-500/50'],
      priority: 'medium',
      themeColor: 'pink',
    },
    {
      className: ['bg-pink-300/90', 'black:bg-pink-500/80'],
      priority: 'high',
      themeColor: 'pink',
    },
    {
      className: ['bg-purple-300/20', 'black:bg-purple-500/20'],
      priority: 'low',
      themeColor: 'purple',
    },
    {
      className: ['bg-purple-300/50', 'black:bg-purple-500/50'],
      priority: 'medium',
      themeColor: 'purple',
    },
    {
      className: ['bg-purple-300/90', 'black:bg-purple-500/80'],
      priority: 'high',
      themeColor: 'purple',
    },
    {
      className: ['bg-red-300/20', 'black:bg-red-500/20'],
      priority: 'low',
      themeColor: 'red',
    },
    {
      className: ['bg-red-300/50', 'black:bg-red-500/50'],
      priority: 'medium',
      themeColor: 'red',
    },
    {
      className: ['bg-red-300/90', 'black:bg-red-500/80'],
      priority: 'high',
      themeColor: 'red',
    },
    {
      className: ['bg-teal-300/20', 'black:bg-teal-500/20'],
      priority: 'low',
      themeColor: 'teal',
    },
    {
      className: ['bg-teal-300/50', 'black:bg-teal-500/50'],
      priority: 'medium',
      themeColor: 'teal',
    },
    {
      className: ['bg-teal-300/90', 'black:bg-teal-500/80'],
      priority: 'high',
      themeColor: 'teal',
    },
    {
      className: ['bg-yellow-300/20', 'black:bg-yellow-500/20'],
      priority: 'low',
      themeColor: 'yellow',
    },
    {
      className: ['bg-yellow-300/50', 'black:bg-yellow-500/50'],
      priority: 'medium',
      themeColor: 'yellow',
    },
    {
      className: ['bg-yellow-300/90', 'black:bg-yellow-500/80'],
      priority: 'high',
      themeColor: 'yellow',
    },
    {
      className: ['bg-white/20', 'black:bg-white/20'],
      priority: 'low',
      themeColor: 'white',
    },
    {
      className: ['bg-white/50', 'black:bg-white/50', 'black:text-black'],
      priority: 'medium',
      themeColor: 'white',
    },
    {
      className: ['bg-white/90', 'black:bg-white/80', 'black:text-black'],
      priority: 'high',
      themeColor: 'white',
    },
  ],
  defaultVariants: {
    height: 1,
    padding: 'default',
    priority: 'medium',
    themeColor: 'unstyled',
    variant: 'primary',
    width: 'full',
  },
  variants: {
    height: height,
    padding: paddingValues,
    priority: priorities,
    themeColor: themeColors,
    variant: {
      primary: [],
      reset: ['bg-transparent', 'rounded-none'],
      spacer: ['hidden'],
      unstyled: [],
    },
    width: width,
  },
});

export interface ItemProps extends ComponentProps<'div'>, VariantProps<typeof item> {
  as?: ElementType;
  link?: string;
}

export const Item = ({
  as: Component = 'div',
  children,
  className,
  height,
  link,
  padding,
  priority,
  themeColor,
  variant,
  width,
  ...props
}: ItemProps) => {
  return (
    <Component
      className={item({
        className,
        height,
        padding,
        priority,
        themeColor,
        variant,
        width,
      })}
      {...props}
    >
      {link ? <Link to={link}>{children}</Link> : children}
    </Component>
  );
};
