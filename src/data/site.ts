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
    // Relocated from the header for now — anchors to the hero lead form on the home page.
    { label: 'Free Estimate', href: '#request-estimate' },
    { label: 'Services', href: '#' },
    { label: 'Comfort Plan', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'About', href: '#' },
  ],
  // Shown on their own line just above the footer copyright.
  legalLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};
