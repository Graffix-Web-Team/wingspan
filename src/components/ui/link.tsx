import NextLink from 'next/link';
import React from 'react';

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({
  href,
  children,
  className = '',
  ...props
}: CustomLinkProps) {
  const isExternal = /^https?:\/\//.test(href); // Check if the href starts with http:// or https://. Otherwise, is probably an internal link.

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={className} {...props}>
      {children}
    </NextLink>
  );
}
