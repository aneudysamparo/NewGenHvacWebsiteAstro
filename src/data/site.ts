/*
 * Site-wide chrome content (header nav + footer). Shared across every page —
 * keep page-specific copy out of here. Directus swap point, same as the other
 * data modules.
 */

export const nav = {
  links: [
    { label: 'Services', href: '#' },
    { label: 'Comfort Plan', href: '#' },
    { label: 'Service Areas', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'About', href: '#' },
  ],
};

export const footer = {
  about: 'Expert residential and commercial HVAC and refrigeration services you can count on.',
  quickLinks: [
    { label: 'Services', href: '#' },
    { label: 'Comfort Plan', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};
