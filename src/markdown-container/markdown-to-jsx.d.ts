declare module 'markdown-to-jsx' {
  import type { ComponentType, ReactNode } from 'react';

  export namespace MarkdownToJSX {
    export interface Options {
      createElement?: (tag: string, props: unknown, ...children: ReactNode[]) => ReactNode;
      forceBlock?: boolean;
      forceInline?: boolean;
      overrides?: {
        [key: string]:
          | ComponentType<unknown>
          | { component?: ComponentType<unknown>; props?: Record<string, unknown> };
      };
      wrapper?: string | ComponentType<unknown>;
      [key: string]: unknown;
    }
  }

  export interface MarkdownProps {
    children: string;
    className?: string;
    options?: MarkdownToJSX.Options;
    [key: string]: unknown;
  }

  const Markdown: ComponentType<MarkdownProps>;
  export default Markdown;
}
