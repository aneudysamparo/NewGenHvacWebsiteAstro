/*
 * Site-wide chrome content: header nav, footer, and the sub-footer CTA band.
 * Shared across every page (Layout renders header + FinalCta + footer + mobile
 * bar). Keep page-specific copy out of here. Directus swap point.
 */

export const nav = {
  links: [
    { label: 'Services', href: '#' },
    { label: 'Comfort Plan', href: '#' },
    { label: 'Service Areas', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'About', href: '/about' },
  ],
};

export const footer = {
  about: 'Expert residential and commercial HVAC and refrigeration services you can count on.',
  quickLinks: [
    // Absolute anchor so it works from any page (jumps to the home hero form).
    { label: 'Free Estimate', href: '/#request-estimate' },
    { label: 'Services', href: '#' },
    { label: 'Comfort Plan', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'About', href: '/about' },
  ],
  // Shown on their own line just above the footer copyright.
  legalLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

// Sub-footer CTA band — rendered by Layout on every page.
export const finalCta = {
  heading: 'Ready to Upgrade Your Comfort?',
  desc: 'Contact us today for a free estimate or emergency service.',
};
