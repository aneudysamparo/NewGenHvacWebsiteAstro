/*
 * Home page content — "Home - Lead Form Hero (Icon-Focused)", plus the
 * Comfort Plan + FAQ sections adapted from "Home - Expanded Information Strategy".
 *
 * Source: Stitch project "NewGen HVAC Digital Presence". This is the content
 * layer for the home page and the swap point for Directus. Site-wide chrome
 * (nav/footer) lives in ./site.ts; business facts in ./business.ts.
 */

export const hero = {
  headlineLead: 'HVAC & Commercial Refrigeration',
  headlineEmphasis: 'You Can Count On',
  subcopy:
    "Family-run and bilingual, serving Methuen and the Merrimack Valley since 2014 — from home comfort to the walk-in cooler that can't go down.",
  emergencyLabel: '24/7 Emergency Service',
  // Trust strip from Docs/home.md (moat-forward). "Licensed & Insured" was
  // dropped — not in the source-of-truth facts; re-add only if JC confirms.
  trustBadges: [
    { icon: 'language', label: 'Bilingual (EN/ES)' },
    { icon: 'kitchen', label: 'Refrigeration Specialists' },
    { icon: 'location_on', label: 'Serving MA & Southern NH' },
  ],
};

export const leadForm = {
  heading: 'Request Your Free Estimate',
  subheading: "Fill out the form below and we'll be in touch shortly.",
  serviceOptions: [
    { value: 'cooling', label: 'AC Repair / Install' },
    { value: 'heating', label: 'Heating Repair / Install' },
    { value: 'commercial', label: 'Commercial Refrigeration' },
    { value: 'maintenance', label: 'Routine Maintenance' },
  ],
  languageOptions: [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
  ],
  submitLabel: 'Get My Free Estimate',
  reassurance: 'No obligation · Fast callback · Hablamos Español',
  smsConsent:
    'By clicking "Get My Free Estimate", you consent to receive SMS messages regarding your inquiry. Msg & data rates may apply. Reply STOP to opt out.',
};

// "Why NewGen" differentiators — from Docs/home.md. Leads with the moat
// (bilingual + commercial refrigeration). Colors limited to the keys the
// Differentiators component maps: primary | secondary | emergency-orange.
export const differentiators = [
  { icon: 'language', color: 'primary', title: 'We Speak Your Language', desc: 'Full service in English and Spanish — clear answers, no translation guesswork.' },
  { icon: 'kitchen', color: 'secondary', title: 'Refrigeration Specialists', desc: "Most residential shops can't help when a cooler fails. We can — it's our specialty, not an afterthought." },
  { icon: 'bolt', color: 'emergency-orange', title: 'Local & Responsive', desc: "Based in Methuen, with 24/7 emergency support for the equipment that can't wait." },
  { icon: 'verified', color: 'primary', title: 'Straight Answers Since 2014', desc: 'Honest diagnosis, fair pricing, and work we stand behind.' },
];

export const servicesSection = {
  heading: 'Comprehensive HVAC Solutions',
  subcopy:
    "We do the work most residential HVAC companies won't touch — real commercial refrigeration and kitchen equipment, alongside the heating and cooling homes and businesses run on every day.",
  // Copy + order from Docs/home.md. TODO(service-pages): point href to the real
  // /services/* paths (in the doc) once those pages exist; '#' avoids 404s now.
  items: [
    { icon: 'domain', title: 'Commercial HVAC', desc: 'Rooftop units, heat pumps, and heating systems that keep your business open.', href: '/services/commercial-hvac' },
    { icon: 'ac_unit', title: 'Residential HVAC', desc: 'Mini-splits, heat pumps, AC, and furnace service to keep your family comfortable.', href: '/services/residential-hvac' },
    { icon: 'kitchen', title: 'Commercial Refrigeration', desc: 'Walk-ins, reach-ins, ice machines, and the fast response that protects your inventory.', href: '/services/commercial-refrigeration' },
    { icon: 'restaurant', title: 'Commercial Kitchen Equipment', desc: 'Fryers, ovens, griddles, and the safety controls behind them — back up fast.', href: '/services/commercial-kitchen-equipment' },
  ],
};

/*
 * Comfort Plan featured card (layout from the Expanded Information Strategy
 * variant). Benefits are pulled from the FROZEN Comfort-Plan-Pricing-Structure-v2.0
 * §9 (Comfort Plan, EN). The Stitch design's bullets were CORRECTED for guardrails:
 *   - removed "No Overtime Service Fees" (the §7.1 after-hours waiver — do NOT publish)
 *   - removed "Two Professional Maintenance Visits" (that's Comfort Plan Plus / $348,
 *     not the $249 Comfort Plan, which is ONE tune-up per system)
 *   - removed the unverified "15% Discount on All Repairs" (frozen doc says only
 *     "member pricing on repairs" — no percentage)
 *   - removed invented "Inflation Protection on Future Pricing"
 *   - plan name "Annual Maintenance Plan" -> "Comfort Plan" (§2 approved name)
 * Do NOT re-add tier/fee claims without the frozen source-of-truth doc.
 */
export const comfortPlanSection = {
  heading: 'The NewGen Comfort Plan',
  subcopy:
    'Investment in maintenance today prevents expensive repairs tomorrow. Join our community of protected property owners.',
  badge: 'Residential maintenance membership',
  planName: 'Comfort Plan',
  priceCurrency: '$',
  priceAmount: '249',
  pricePeriod: '/per year',
  benefits: [
    'One professional tune-up per year for your HVAC system',
    'Priority scheduling when you need service',
    'Member pricing on repairs',
    'Catches small issues before they become expensive ones',
  ],
  cta: { label: 'See the Comfort Plan', href: '/comfort-plan' },
  finePrint: 'Terms and conditions apply. Plan starts from date of enrollment.',
};

export const serviceAreas = {
  heading: 'Proudly Serving the Merrimack Valley & Beyond',
  desc: 'Based in Methuen, MA, NewGen HVAC provides fast, reliable service to homes and businesses across the Merrimack Valley, Greater Lowell, and into Southern New Hampshire.',
  // Real footprint from Docs/00-business-facts.md (pruned list) — a representative
  // subset for display. Not yet linked (service-area pages not built).
  towns: [
    'Methuen, MA', 'Lawrence, MA', 'Haverhill, MA', 'Andover, MA',
    'North Andover, MA', 'Lowell, MA', 'Dracut, MA', 'Tewksbury, MA',
    'Salem, NH', 'Windham, NH', 'Derry, NH', 'Pelham, NH',
  ],
};

export const faq = {
  heading: 'Frequently Asked Questions',
  subcopy: 'Find answers to common questions about our HVAC and refrigeration services.',
  items: [
    {
      q: 'What areas do you serve?',
      a: "We're based in Methuen, MA and serve the Merrimack Valley and Greater Lowell — including Lawrence, Haverhill, Andover, North Andover, and Lowell — plus Southern New Hampshire towns like Salem, Windham, and Derry. Not sure if you're in our area? Just ask.",
      open: true,
    },
    {
      q: 'Do you offer emergency repairs?',
      a: 'Yes, we offer 24/7 emergency repair services for both residential HVAC and commercial refrigeration. We understand that a cooling failure can be critical for businesses or uncomfortable for families, so we prioritize emergency calls.',
      open: false,
    },
    {
      q: 'Are your technicians bilingual?',
      a: 'Absolutely. We pride ourselves on being part of our diverse community. Many of our technicians are bilingual and fluent in Spanish (hablamos español) to ensure clear communication and exceptional service for all our neighbors.',
      open: false,
    },
    {
      q: 'How often should I service my HVAC system?',
      a: 'We recommend a professional tune-up twice a year — once in the spring for your air conditioning and once in the fall for your heating system. Our Comfort Plan makes seasonal maintenance effortless and affordable.',
      open: false,
    },
  ],
};

export const testimonials = {
  heading: 'What Our Customers Say',
  ratingNote: 'Top-rated service on Google Reviews',
  /*
   * REAL Google reviews from the Google Business Profile (pulled 2026-06-09),
   * verbatim and only trimmed for length with "…". Replaces the old placeholders
   * (§6.5 satisfied). Chosen for a mix of commercial + residential, emergency,
   * fast response, and honesty/fair pricing, with the owner Jean by name. Reviews
   * that mentioned plumbing were skipped — not a listed service.
   * TODO(reviews): owner wants these DYNAMIC later (scraper/API) + reviewer photos.
   */
  reviews: [
    { initial: 'B', accent: 'primary', name: 'Benjamin Suero', quote: "Reliable, quick, friendly and no gimmick. Affordable pricing for commercial and residential. … They are fully knowledgeable and when they don't know an answer they are up front about it and won't charge you unwanted diagnostic fees like these other companies in the area." },
    { initial: 'E', accent: 'secondary', name: 'Esthefanie Castillo', quote: "I've worked with New Generation HVAC on both my personal properties and several commercial projects, and they've been great every time. Jean is easy to work with, responsive, and really knows his stuff. Jean and his team are consistently reliable, knowledgeable, and professional in every aspect of the job." },
    { initial: 'L', accent: 'emergency-orange', name: 'Luis Castillo', quote: "I had an emergency at home and they came promptly and efficiently to resolve the problem. Jean, the owner, was very professional and friendly. He and his team took great care of us and got us up and running for a good price. It's been a couple years and we didn't have any issues." },
    { initial: 'P', accent: 'primary', name: 'Praveen', quote: 'I highly recommend Jean from New Generation HVAC for furnace repairs. He arrived on time, quickly identified an issue, and clearly explained the repair process and ongoing maintenance to prevent future problems. Jean is professional, honest, and highly knowledgeable.' },
    { initial: 'R', accent: 'secondary', name: 'Rose Nivar', quote: 'Jean came out to check our HVAC system and did an excellent job. He was fast, efficient, and very knowledgeable. He took the time to explain what he was doing and made sure everything was running properly before he left. Highly recommend!' },
    { initial: 'D', accent: 'emergency-orange', name: 'Don D.', quote: 'Amazing quick response time. They scheduled service and were here in 2 days. So far very happy with the customer service.' },
  ],
};

// `finalCta` moved to ./site.ts — it's now global sub-footer chrome rendered by Layout.
