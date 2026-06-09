/*
 * About page content — Stitch "About Us - Upgraded Branding".
 * Header, footer, and the CTA band come from the shared chrome (Layout +
 * FinalCta), NOT from Stitch's versions. Directus swap point.
 */

export const aboutHero = {
  badge: 'About NewGen HVAC',
  // TODO(flag): "Exhaust" lightly brushes the paused hood/exhaust-cleaning area
  // (§6.3). Kept here as a general air-handling tagline — confirm wording.
  headline: "From Airflow to Exhaust — We've Got You Covered.",
  subcopy:
    'Providing top-tier residential and commercial heating, cooling, and refrigeration solutions with a commitment to technical excellence and neighborly service.',
  cta: { label: 'Get to Know Us', href: '#our-story' },
  image: {
    src: '/images/about-hero.png',
    alt: 'Modern commercial HVAC unit installation on a rooftop',
  },
};

export const ourStory = {
  heading: 'Our Story',
  // TODO(business-facts): CONFIRM founder + founding year with the owner.
  // "Jean Carlos Alcántara" is almost certainly JC (jc@newgenhvac.com). The year
  // "2014" from the Stitch draft is UNVERIFIED, so it is omitted until confirmed.
  founder: 'Founded by Jean Carlos Alcántara.',
  image: { src: '/images/about-story.png', alt: 'NewGen HVAC technician' },
  paragraphs: [
    "NewGen HVAC was built on a simple premise: provide expert, reliable technical service without losing the personal touch of a neighborhood business. We understand that whether it's your home's comfort or your business's critical refrigeration, you need solutions you can trust.",
    "Unlike large corporate franchises, we are proudly owner-run and family-operated. When you call us, you aren't routed to an overseas call center; you connect with local experts who understand the specific climate challenges of our region.",
    'Our team leverages the latest in HVAC technology and diagnostic tools to ensure your systems run efficiently, saving you money and protecting your indoor air quality.',
  ],
};

export const whatMakesUsDifferent = {
  heading: 'What Makes Us Different',
  subcopy: 'We blend corporate-level engineering standards with local, accessible service.',
  cards: [
    { icon: 'language', title: 'Bilingual Support', desc: 'Clear communication is key to peace of mind. Our team is fully bilingual in English and Spanish, ensuring every detail of your service is understood.' },
    { icon: 'ac_unit', title: 'Commercial Experts', desc: 'Beyond residential comfort, we specialize in complex commercial refrigeration systems, keeping your business inventory safe and compliant.' },
    { icon: 'handshake', title: 'Honest Local Work', desc: 'No upselling, no hidden fees. We provide transparent diagnostics and honest recommendations to fix the root cause of the problem.' },
  ],
};

export const howWeWork = {
  heading: 'How We Work',
  subcopy: 'A streamlined, transparent process designed to get your systems running perfectly.',
  steps: [
    { label: 'Step 1', icon: 'forum', title: 'Consultation', desc: 'We listen to your needs, inspect the site, and provide a clear, upfront estimate.', emphasis: false },
    { label: 'Step 2', icon: 'build', title: 'Service/Install', desc: 'Expert execution using premium parts, ensuring minimal disruption to your day.', emphasis: false },
    { label: 'Step 3', icon: 'home_repair_service', title: 'Maintenance', desc: 'Proactive check-ups to extend equipment life and maintain peak efficiency.', emphasis: false },
    { label: 'Ongoing', icon: 'emergency', title: '24/7 Emergency', desc: 'Round-the-clock rapid response when you need us most.', emphasis: true },
  ],
};
