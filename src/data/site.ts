/*
 * Site-wide chrome content: header nav, footer, and the sub-footer CTA band.
 * Shared across every page (Layout renders header + FinalCta + footer + mobile
 * bar). Keep page-specific copy out of here. Directus swap point.
 */

export const nav = {
  links: [
    { label: 'Services', href: '/services' },
    { label: 'Comfort Plan', href: '/comfort-plan' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const footer = {
  about: 'Expert residential and commercial HVAC and refrigeration services you can count on.',
  quickLinks: [
    // Absolute anchor so it works from any page (jumps to the home hero form).
    { label: 'Free Estimate', href: '/#request-estimate' },
    { label: 'Services', href: '/services' },
    { label: 'Comfort Plan', href: '/comfort-plan' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  // Shown on their own line just above the footer copyright.
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

// Sub-footer CTA band — rendered by Layout on every page.
export const finalCta = {
  heading: 'Ready to Upgrade Your Comfort?',
  desc: 'Contact us today for a free estimate or emergency service.',
};
