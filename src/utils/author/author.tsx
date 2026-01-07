import { parseAuthorString } from '@regardio/js/text';

export function generateLinkFromAuthorString(input: string): React.ReactNode {
  const match = parseAuthorString(input);

  if (match.name) {
    // Generate email link if email is present
    if (match.email) {
      return (
        <a
          className={'u-email p-name'}
          href={`mailto:${match.email}`}
        >
          {match.name}
        </a>
      );
    }

    // Generate URL link if URL is present (including relative URLs that start with a slash)
    if (match.url && (match.url.startsWith('/') || match.url.startsWith('http'))) {
      return (
        <a
          className={'u-url p-name'}
          href={match.url}
        >
          {match.name}
        </a>
      );
    }

    // Return plain name with microformat class if only name is present
    return <span className={'p-name'}>{match.name}</span>;
  }

  return;
}
