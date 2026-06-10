/*
 * Business facts — single source of truth for the site.
 *
 * TODO(business-facts): reconcile against the canonical "business-facts" doc in
 * Drive when located. Values below come from the approved Stitch design and are
 * internally consistent (email matches the Drive owner jc@newgenhvac.com).
 * This module will be fed from Directus at build-time; keep facts here, not
 * hardcoded inside components.
 */
export const business = {
  name: 'NewGen HVAC',
  legalName: 'New Generation HVAC LLC',
  tagline: 'HVAC & Commercial Refrigeration',
  phone: { display: '(978) 876-8558', href: 'tel:+19788768558' },
  email: 'jc@newgenhvac.com',
  address: { street: '18 Annis St', city: 'Methuen', state: 'MA', zip: '01844' },
  areaLabel: 'Merrimack Valley & Southern NH',
  hours: {
    weekdaysLabel: 'Mon – Fri:',
    weekdaysValue: '8:00 AM – 5:00 PM',
    emergencyLabel: 'Emergency Service:',
    emergencyValue: '24/7',
  },
  // TODO(social): replace with real profile URLs.
  social: { facebook: '#', instagram: '#', linkedin: '#' },
  // Google Business Profile — real, verified by owner (2026-06-09).
  reviews: { rating: 4.9, count: 56, url: 'https://share.google/IHKkCSNWwc9nY7LBK' },
} as const;
