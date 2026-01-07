import type { Meta, StoryObj } from '@storybook/react-vite';
import { MarkdownContainer } from './markdown-container';

const meta: Meta<typeof MarkdownContainer> = {
  component: MarkdownContainer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Components/MarkdownContainer',
};

export default meta;
type Story = StoryObj<typeof MarkdownContainer>;

export const Default: Story = {
  args: {
    children: `# Hello World

This is a **markdown** paragraph with *italic* text.

## Features

- List item 1
- List item 2
- List item 3

[Link to example](https://example.com)`,
    locale: 'en',
  },
};

export const GermanLocale: Story = {
  args: {
    children: `# Willkommen

Dies ist ein "Beispieltext" mit typografischen Anführungszeichen.

## Funktionen

- Punkt 1
- Punkt 2`,
    locale: 'de',
  },
};

export const WithTruncation: Story = {
  args: {
    children:
      'This is a long paragraph that will be truncated. It contains multiple sentences. Each sentence adds more content. The truncation should work properly.',
    locale: 'en',
    sentences: 2,
  },
};

export const WithParagraphLimit: Story = {
  args: {
    children: `First paragraph with some content.

Second paragraph with more content.

Third paragraph that should be hidden.

Fourth paragraph also hidden.`,
    locale: 'en',
    paragraphs: 2,
  },
};

export const WithCharacterLimit: Story = {
  args: {
    characters: 50,
    children: 'This is a long text that will be truncated after a certain number of characters.',
    locale: 'en',
  },
};
