type AuthorInfo = {
  name?: string;
  email?: string;
  url?: string;
};

const regex = /^(.*?)\s*(?:<([^>]+)>)?\s*(?:\(([^)]+)\))?$/;

export function parseAuthorString(input: string): AuthorInfo {
  const match = input.match(regex);

  if (match) {
    const [, name, email, url] = match;

    const result: AuthorInfo = {};

    if (email) {
      result.email = email;
    }

    const trimmedName = name?.trim();

    if (trimmedName) {
      result.name = trimmedName;
    }

    if (url) {
      result.url = url;
    }

    return result;
  }

  return {};
}

export function generateLinkFromAuthorString(input: string): React.ReactNode {
  const match = input.match(regex);
  if (match) {
    const [, name, email, url] = match.map((part) => {
      return part?.trim();
    });

    // Generate email link if email is present
    if (email) {
      return (
        <a
          className={'u-email p-name'}
          href={`mailto:${email}`}
        >
          {name}
        </a>
      );
    }

    // Generate URL link if URL is present (including relative URLs that start with a slash)
    if (url && (url.startsWith('/') || url.startsWith('http'))) {
      return (
        <a
          className={'u-url p-name'}
          href={url}
        >
          {name}
        </a>
      );
    }

    // Return plain name with microformat class if only name is present
    return <span className={'p-name'}>{name}</span>;
  }

  return;
}
