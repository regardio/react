'use client';

import { useEffect, useState } from 'react';

export interface ProtectedEmailProps {
  className?: string;
  domain: string;
  text?: string;
  username: string;
}

/**
 * ProtectedEmail component that obfuscates email addresses to protect from scrapers.
 * The email is only assembled client-side with JavaScript, making it harder for scrapers to extract.
 *
 * @param username - The part before the @ symbol
 * @param domain - The part after the @ symbol
 * @param text - Optional display text (defaults to username(at)domain)
 * @param className - Optional CSS class name
 */
export function ProtectedEmail({
  username,
  domain,
  text,
  className,
}: ProtectedEmailProps): React.JSX.Element {
  const [mounted, setMounted] = useState(false);

  // Only assemble the email on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Display format before JavaScript runs (or for users without JS)
  const fallbackText = text || `${username}(at)${domain}`;

  // Only assemble the actual mailto link on the client side
  const handleClick = (e: React.MouseEvent) => {
    if (mounted) {
      window.location.href = `mailto:${username}@${domain}`;
      e.preventDefault();
    }
  };

  return (
    <a
      aria-label={`Email address: ${username} at ${domain}`}
      className={className}
      data-email-protected="true"
      href={mounted ? '#email-protected' : undefined}
      onClick={handleClick}
    >
      {fallbackText}
    </a>
  );
}
