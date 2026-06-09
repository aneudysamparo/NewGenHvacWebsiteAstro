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
    'Expert, reliable service for homes and businesses. Keep your environment perfect year-round with our certified professionals.',
  emergencyLabel: '24/7 Emergency Service',
  trustBadges: [
    { icon: 'verified', label: 'Licensed & Insured' },
    { icon: 'workspace_premium', label: '100% Satisfaction' },
    { icon: 'thumb_up', label: 'Local Experts' },
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

export const differentiators = [
  { icon: 'language', color: 'primary', title: 'Bilingual Support', desc: 'Hablamos Español to better serve our community.' },
  { icon: 'medical_services', color: 'emergency-orange', title: '24/7 Emergency Service', desc: 'Always here when you need us most.' },
  { icon: 'verified_user', color: 'secondary', title: 'Licensed & Insured', desc: 'Fully certified professionals for peace of mind.' },
  { icon: 'location_on', color: 'primary', title: 'Local Experts', desc: 'Serving Merrimack Valley & Southern NH.' },
];

export const servicesSection = {
  heading: 'Comprehensive HVAC Solutions',
  subcopy:
    'From residential comfort to commercial reliability, we have the expertise to handle all your climate control needs.',
  items: [
    { icon: 'ac_unit', title: 'Residential HVAC', desc: 'Keep your home comfortable year-round with our expert AC and heating installation, repair, and tune-up services.', href: '#' },
    { icon: 'domain', title: 'Commercial HVAC', desc: 'Scalable heating and cooling solutions designed for businesses and commercial facilities.', href: '#' },
    { icon: 'kitchen', title: 'Commercial Refrigeration', desc: 'Walk-in coolers, freezers, and ice machines tailored for restaurants and retail spaces.', href: '#' },
    { icon: 'restaurant', title: 'Commercial Kitchen Equipment', desc: 'Expert maintenance and repair for commercial kitchen appliances to keep your operations running smoothly.', href: '#' },
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
  cta: { label: 'Join the Plan', href: '#' },
  finePrint: 'Terms and conditions apply. Plan starts from date of enrollment.',
};

export const serviceAreas = {
  heading: 'Proudly Serving the Merrimack Valley & Beyond',
  desc: 'Based in Methuen, MA, NewGen HVAC provides fast, reliable service to homes and businesses across the region.',
  // TODO(service-area): confirm against the pruned service-area town list before
  // turning these into real linked service-area pages.
  towns: ['Methuen, MA', 'Lawrence, MA', 'Andover, MA', 'Southern NH'],
};

export const faq = {
  heading: 'Frequently Asked Questions',
  subcopy: 'Find answers to common questions about our HVAC and refrigeration services.',
  items: [
    {
      q: 'What areas do you serve?',
      // TODO(service-area): trimmed to the verified footprint. Confirm extra towns
      // (North Andover, Salem, Pelham, etc.) against the pruned list before adding.
      a: "We're based in Methuen, MA and proudly serve the Merrimack Valley — including Lawrence and Andover — and extend into Southern New Hampshire. Not sure if you're in our area? Just ask.",
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
   * TODO(reviews): PLACEHOLDER reviews — kept temporarily at the owner's request
   * ("mantén reseñas falsas por ahora"). CLAUDE.md §6.5 requires REAL Google
   * reviews and forbids placeholders in production. REPLACE BEFORE LAUNCH.
   */
  reviews: [
    { initial: 'M', accent: 'primary', name: 'Michael T.', quote: 'NewGen saved us during a heatwave! The technician arrived quickly, diagnosed the AC issue right away, and had it running beautifully within an hour. Highly recommend!' },
    { initial: 'S', accent: 'secondary', name: 'Sarah P.', quote: "We use NewGen for all our restaurant's refrigeration needs. They understand that downtime costs us money and are always responsive and professional. Excellent commercial service." },
    { initial: 'D', accent: 'emergency-orange', name: 'David R.', quote: 'Signed up for their Comfort Plan last year. The peace of mind knowing our furnace is ready for winter is great. Very polite and thorough technicians. Hablan español, which is a big plus for my parents.' },
  ],
};

// `finalCta` moved to ./site.ts — it's now global sub-footer chrome rendered by Layout.
