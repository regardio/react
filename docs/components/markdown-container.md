# MarkdownContainer

A Markdown/MDX rendering component with typography processing and content truncation.

## Import

```tsx
import { MarkdownContainer } from '@regardio/react/components/markdown-container';
```

## Usage

### Basic Usage

```tsx
<MarkdownContainer locale="en">
  # Hello World

  This is **markdown** content with *formatting*.
</MarkdownContainer>
```

### With Truncation

```tsx
{/* Limit to 2 sentences */}
<MarkdownContainer locale="en" sentences={2}>
  {longContent}
</MarkdownContainer>

{/* Limit to 100 characters */}
<MarkdownContainer locale="en" characters={100}>
  {longContent}
</MarkdownContainer>

{/* Limit to 3 paragraphs */}
<MarkdownContainer locale="en" paragraphs={3}>
  {longContent}
</MarkdownContainer>
```

### With Custom Components

```tsx
const mdxComponents = {
  Button: MyButton,
  Card: MyCard,
};

<MarkdownContainer
  locale="en"
  mdxComponents={mdxComponents}
>
  <Button>Click me</Button>
</MarkdownContainer>
```

### With Markdown Overrides

```tsx
const overrides = {
  a: { component: CustomLink },
  img: { component: CustomImage },
};

<MarkdownContainer
  locale="en"
  markdownOverrides={overrides}
>
  {content}
</MarkdownContainer>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `locale` | `string` | — | Locale for typography processing |
| `characters` | `number` | — | Max characters to display |
| `sentences` | `number` | — | Max sentences to display |
| `paragraphs` | `number` | — | Max paragraphs to display |
| `mdxComponents` | `Record<string, Component>` | — | Custom MDX components |
| `markdownOverrides` | `MarkdownOverrides` | — | Override default elements |
| `className` | `string` | — | Additional CSS classes |

## Typography Processing

The component automatically processes text for the specified locale:

- Typographic quotes (e.g., "quotes" → „Anführungszeichen" in German)
- Special character replacements
- Locale-aware formatting

## Link Transformation

Internal links to Regardio domains are automatically converted to relative paths:

```markdown
[Link](https://regard.io/about)
<!-- Becomes: /about -->
```

## MDX Support

Wrap with `MDXProvider` for full MDX support:

```tsx
import { MDXProvider } from '@mdx-js/react';

<MDXProvider components={mdxComponents}>
  <MarkdownContainer locale="en">
    {mdxContent}
  </MarkdownContainer>
</MDXProvider>
```

## Related

- [Text component](./text.md) — Typography component
- [Link component](./link.md) — Link component
