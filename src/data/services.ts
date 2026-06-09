/*
 * Services index page content — layout from the Stitch screen "Services - 2x2
 * Grid Layout". Copy is grounded in Docs/services.md (source of truth); chrome
 * (header/CTA/footer) + the Differentiators, Testimonials, and FAQ sections are
 * REUSED from the existing components. Directus swap point.
 *
 * GUARDRAIL (§6.3): the Stitch card listed "Exhaust Hoods" under kitchen
 * equipment — that brushes the PAUSED NFPA-96 hood-cleaning service. Dropped.
 * Kitchen Equipment here is repair-only (fryers, ovens, gas valves, controls).
 */

export const hero = {
  badge: 'Our Services',
  headingLead: 'One Local Shop for HVAC, Refrigeration &',
  headingEmphasis: 'Kitchen Equipment',
  subcopy:
    'Whether you run a restaurant, manage a building, or just want your home comfortable, we cover the equipment that keeps you running — in English and Spanish.',
  primaryCta: { label: 'Get a Free Estimate' }, // opens the reusable lead modal
  secondaryCta: { label: 'View Services', href: '#services' },
  image: { src: '/images/about-hero.png', alt: 'NewGen HVAC technician servicing a commercial rooftop unit' },
};

// Trust strip under the hero (moat-forward, from Docs/00-business-facts.md).
export const trustBadges = [
  { icon: 'translate', label: 'Bilingual (EN/ES)' },
  { icon: 'history', label: 'Serving the Valley Since 2014' },
  { icon: 'kitchen', label: 'Commercial Refrigeration Specialists' },
  { icon: 'emergency_home', label: '24/7 Emergency Service' },
];

export const grid = {
  heading: 'Comprehensive Climate & Equipment Solutions',
  subcopy:
    'NewGen HVAC handles the full range of climate and refrigeration work for homes and businesses across the Merrimack Valley and Southern New Hampshire.',
  // TODO(service-pages): point href to the real /services/* detail pages (paths
  // in Docs/services.md) once built; '#' avoids 404s for now.
  services: [
    {
      accent: 'primary',
      icon: 'domain',
      title: 'Commercial HVAC',
      desc: 'Installation, replacement, and repair of rooftop units, heat pumps, and heating systems that keep your business open.',
      features: ['Rooftop Units (RTUs)', 'Heat Pumps', 'Heating Systems', 'Preventative Maintenance'],
      href: '#',
    },
    {
      accent: 'secondary',
      icon: 'ac_unit',
      title: 'Residential HVAC',
      desc: 'High-efficiency mini-splits, heat pumps, AC, and furnace service to keep your home comfortable year-round.',
      features: ['Mini-Splits', 'Heat Pumps', 'AC Repair & Install', 'Furnace Service'],
      href: '#',
    },
    {
      accent: 'primary-container',
      icon: 'kitchen',
      title: 'Commercial Refrigeration',
      desc: 'Walk-in coolers, freezers, reach-ins, and ice machines — with the fast response that protects your inventory.',
      features: ['Walk-in Coolers', 'Reach-in Freezers', 'Ice Machines', 'Emergency Repair'],
      href: '#',
    },
    {
      accent: 'primary',
      icon: 'restaurant',
      title: 'Commercial Kitchen Equipment',
      desc: 'Repair and safety service for fryers, ovens, griddles, burners, and gas valves.',
      features: ['Fryers & Griddles', 'Ovens & Ranges', 'Burners & Gas Valves', 'Safety Controls'],
      href: '#',
    },
  ],
};

// Comfort Plan callout band → /comfort-plan. $249/yr is the verified PUBLIC price.
export const membership = {
  heading: 'Homeowners: get ahead of breakdowns',
  body: 'The Comfort Plan gives you seasonal tune-ups, priority scheduling, and member pricing on repairs.',
  priceLabel: 'Starting at',
  priceAmount: '$249',
  pricePeriod: '/yr',
  cta: { label: 'See the Comfort Plan', href: '/comfort-plan' },
};
