/*
 * About page content — Stitch "About Us - Upgraded Branding".
 * Header, footer, and the CTA band come from the shared chrome (Layout +
 * FinalCta), NOT from Stitch's versions. Directus swap point.
 */

export const aboutHero = {
  badge: 'About NewGen HVAC',
  // Confirmed in Docs/00-business-facts.md as the brand's GENERAL tagline (not a
  // hood-cleaning claim) and used verbatim as the About H1 in Docs/about.md.
  headline: "From Airflow to Exhaust — We've Got You Covered.",
  subcopy:
    'Bilingual, owner-run HVAC and refrigeration service for the Merrimack Valley and Southern New Hampshire.',
  cta: { label: 'Get to Know Us', href: '#our-story' },
  image: {
    src: '/images/about-hero.png',
    alt: 'Modern commercial HVAC unit installation on a rooftop',
  },
};

export const ourStory = {
  heading: 'Our Story',
  // Founder + founding year CONFIRMED in Docs/00-business-facts.md ("Founded:
  // 2014 ... Jean Carlos Alcántara") and Docs/about.md. Story copy from Docs/about.md.
  founder: 'Founded in 2014 by Jean Carlos Alcántara — serving the Merrimack Valley ever since.',
  image: { src: '/images/Logo-New-Generation-HVAC.png', alt: 'New Geneneration HVAC Logo' },
  paragraphs: [
    "NewGen HVAC (New Generation HVAC LLC) was founded in 2014 by Jean Carlos Alcántara with a simple idea: give homeowners and business owners a technician who actually knows the equipment, shows up when promised, and explains things in plain language — in English or Spanish. More than a decade later, that's still how we work.",
    "We're not a franchise or a call center. We're a local shop based in Methuen, and when you call, you're dealing with the people who do the work.",
  ],
};

export const whatMakesUsDifferent = {
  heading: 'What Makes Us Different',
  subcopy: 'Local, bilingual, and one of the few shops that handles commercial refrigeration in-house.',
  cards: [
    { icon: 'language', title: 'Bilingual Service', desc: 'We serve our heavily Spanish-speaking community the way it deserves — full service in English and Español, with no detail lost in translation.' },
    { icon: 'kitchen', title: 'Commercial Refrigeration Expertise', desc: "Walk-in coolers, freezers, and ice machines are their own discipline. Most residential HVAC companies don't touch them — we specialize in them." },
    { icon: 'handshake', title: 'Honest, Practical Work', desc: 'We diagnose the real problem, quote it fairly, and stand behind the fix.' },
  ],
};

export const howWeWork = {
  heading: 'How We Work',
  subcopy: 'A streamlined, transparent process designed to get your systems running perfectly.',
  steps: [
    { label: 'Step 1', icon: 'forum', title: 'Consultation', desc: 'We assess your heating, cooling, or refrigeration needs and give you a straight answer — no jargon, no pressure.', emphasis: false },
    { label: 'Step 2', icon: 'build', title: 'Service/Install', desc: 'Done right the first time, with quality parts and clean workmanship.', emphasis: false },
    { label: 'Step 3', icon: 'home_repair_service', title: 'Maintenance', desc: 'Seasonal tune-ups that catch small problems before they become expensive ones.', emphasis: false },
    { label: 'Ongoing', icon: 'emergency', title: '24/7 Emergency', desc: "24/7 response for the equipment that can't wait.", emphasis: true },
  ],
};
