/*
 * Comfort Plan page content — public pricing page for the NewGen Comfort Plan.
 * Layout from the Stitch screen "Comfort Plan - NewGen HVAC Nueva". Chrome
 * (header/footer/sub-footer CTA/mobile bar) is reused from Layout, NOT Stitch's.
 *
 * ⚠️ FROZEN PRODUCT — tier/fee copy is pulled VERBATIM from the frozen
 * Comfort-Plan-Pricing-Structure-v2.0 (via the comfort-plan-engine source of
 * truth). The Stitch design re-introduced the same guardrail errors we already
 * caught on the home card; they were CORRECTED here:
 *   1. Removed "No Overtime Charges" from Plus — the §7.1 after-hours waiver.
 *      It is UNRESOLVED DRIFT (Pricing v2.0 lists it; Customer Record Standards
 *      §5 bills after-hours "no exceptions"). CLAUDE.md §7.1 → do NOT publish.
 *   2. Removed the invented repair percentages ("10% / 15% Off Repairs"). The
 *      frozen doc says only "member pricing on repairs" (Plan) and "deeper member
 *      discounts on repairs and diagnostics" (Plus) — NO percentage.
 *   3. Rewrote the system-counting explainer. Stitch said "separate AC + Furnace
 *      = 2 systems", which is WRONG and would overcharge (the doc's stated #1
 *      error). Frozen rule: shared chassis/blower/ducts = ONE system; a heat pump
 *      = ONE system; only physically independent units add the +$99.
 *   4. Tune-up counts kept verbatim: Plan = 1/yr per system; Plus = 2 seasonal.
 * Do NOT re-add any tier/fee claim without the frozen source-of-truth doc.
 *
 * PRICES: all confirmed VERBATIM from the in-repo source of truth
 * Docs/00-business-facts.md + Docs/comfort-plan.md: $249/yr ($24.99/mo),
 * $348/yr ($34.98/mo), +$99/yr (+$9.99/mo). No discounting, no rounding.
 */

export const hero = {
  badge: 'Preventative Maintenance',
  headlineLead: 'Keep Your Home Comfortable',
  headlineEmphasis: 'All Year',
  subcopy:
    'Protect your comfort and extend the life of your HVAC system with the NewGen Comfort Plan. Regular tune-ups, priority scheduling, and member pricing on repairs — all year long.',
  // primary opens the reusable lead modal; secondary scrolls to the plans grid.
  primaryCta: { label: 'Become a Member' },
  secondaryCta: { label: 'View Plans', href: '#plans' },
};

export const tiersSection = {
  heading: 'Choose Your Comfort Level',
  subcopy: "Simple, transparent pricing to protect your home's climate control.",
};

/*
 * The two membership tiers. `featured` raises and highlights the Plus card.
 * The Plus benefits[0] is rendered emphasized (the 2-visit differentiator).
 */
export const tiers = [
  {
    id: 'comfort-plan',
    name: 'Comfort Plan',
    accent: 'secondary',
    featured: false,
    priceAmount: '$249',
    pricePeriod: '/yr',
    priceMonthly: 'or $24.99/mo',
    benefits: [
      'One professional tune-up per year, per system',
      'Priority scheduling when you need service',
      'Member pricing on repairs',
      'Catches small issues before they become expensive ones',
    ],
    cta: { label: 'Join the Plan', href: '/#request-estimate' },
  },
  {
    id: 'comfort-plan-plus',
    name: 'Comfort Plan Plus',
    accent: 'primary',
    featured: true,
    badge: 'Best Value',
    priceAmount: '$348',
    pricePeriod: '/yr',
    priceMonthly: 'or $34.98/mo',
    benefits: [
      'Two seasonal tune-ups per year — before cooling and before heating season',
      'Priority scheduling when you need service',
      'Deeper member discounts on repairs and diagnostics',
      'Best value for full-year peace of mind',
    ],
    cta: { label: 'Choose Plus', href: '/#request-estimate' },
  },
] as const;

/*
 * Third card: per-extra-system add-on. Copy from the frozen Add-On definition
 * (verbatim): each additional INDEPENDENT system; a heat pump counts as one.
 */
export const addOn = {
  name: 'Additional System',
  accent: 'surface-tint',
  priceAmount: '+$99',
  pricePeriod: '/yr',
  priceMonthly: 'or +$9.99/mo',
  desc: 'Have more than one HVAC system in your home? Add coverage for each additional independent system on top of either plan, at a member rate.',
  note: 'A heat pump that heats and cools counts as one system, not two.',
};

/*
 * System-counting explainer — REWRITTEN to the frozen rule (Stitch's version was
 * wrong; see header note #3). Matches Pricing v2.0 §2 + the verbatim Add-On note.
 */
export const systemCounting = {
  heading: 'How are systems counted?',
  body: "One system = one physical setup, even if it heats and cools through the same equipment. A heat pump counts as one system, and a furnace and AC that share the same blower and ductwork count as one system — not two. An additional system is a physically independent unit, like a separate mini-split or a second furnace. Accessories like humidifiers or UV lights aren't counted.",
};

/*
 * "Why join" — from Docs/comfort-plan.md §Why join. Intro paragraph + the four
 * concrete payoffs pulled from the same copy (no invented claims).
 */
export const whyJoin = {
  heading: 'Why join the Comfort Plan',
  body: 'A maintenance membership is the cheapest insurance you can buy for your HVAC system. Regular seasonal tune-ups keep your equipment efficient, catch small problems before they become expensive failures, and extend the life of what you already own.',
  points: [
    { icon: 'energy_savings_leaf', title: 'Lower running costs', desc: 'Tuned equipment runs efficiently, so you waste less energy every month.' },
    { icon: 'build', title: 'Fewer surprise breakdowns', desc: 'We catch small problems early — before they turn into expensive failures.' },
    { icon: 'bolt', title: 'Front-of-the-line service', desc: 'Members skip to priority scheduling when they need us most.' },
    { icon: 'savings', title: 'Member pricing on repairs', desc: 'When a repair does come up, you pay less than non-members.' },
  ],
};

/*
 * "How it works" — detailed enrollment + service journey. Adapted from the
 * comfort-plan-engine activation flow and Docs/comfort-plan.md. The first
 * tune-up window is kept VAGUE on purpose (60-vs-90-day drift, CLAUDE.md §7.2).
 */
export const howItWorks = {
  heading: 'How the Comfort Plan works',
  subcopy: 'From signing up to year-round coverage, here is exactly what to expect.',
  steps: [
    {
      icon: 'fact_check',
      title: 'Pick your plan',
      desc: 'Choose Comfort Plan (one tune-up a year) or Comfort Plan Plus (two seasonal tune-ups). We help you count your systems correctly so you are never overcharged.',
    },
    {
      icon: 'how_to_reg',
      title: 'Enroll in minutes',
      desc: 'Call us or request a callback and we get you set up in a few minutes. Pay annually or monthly — your choice.',
    },
    {
      icon: 'event_available',
      title: 'We book your first tune-up',
      desc: 'We schedule your first seasonal visit shortly after you sign up and handle the reminders, so it never slips your mind.',
    },
    {
      icon: 'verified',
      title: 'Stay covered all year',
      desc: 'Seasonal tune-ups keep your system efficient, you get priority scheduling, and you pay member pricing whenever a repair comes up.',
    },
  ],
};

/*
 * FAQ — verbatim Q&A from Docs/comfort-plan.md §FAQs (the first tune-up window
 * is intentionally not committed to a number).
 */
export const faqs = {
  heading: 'Comfort Plan questions',
  items: [
    {
      q: 'Who is the Comfort Plan for?',
      a: "Homeowners. It's a residential membership designed to keep your home's heating and cooling running reliably all year.",
    },
    {
      q: 'What does a tune-up include?',
      a: 'A seasonal inspection and service of your system to keep it running efficiently and safely, and to catch wear before it turns into a breakdown.',
    },
    {
      q: "What's the difference between Comfort Plan and Comfort Plan Plus?",
      a: 'The base Comfort Plan includes one tune-up per system per year. Plus includes two — typically one in spring and one in fall — which is the better value if you want full-season coverage.',
    },
  ],
};

/*
 * ES verbatim definitions for the future Spanish mirror (CLAUDE.md §8: the
 * Comfort Plan ES copy is pulled VERBATIM from the frozen docs — do NOT
 * freestyle-translate). Kept here so the mirror can use them directly.
 *
 * Comfort Plan (ES): Un mantenimiento profesional al año para su sistema HVAC,
 *   prioridad en agendar cuando necesite servicio, y precios de miembro en
 *   reparaciones. Mantiene su equipo eficiente y detecta problemas pequeños antes
 *   de que se vuelvan caros.
 * Comfort Plan Plus (ES): Dos mantenimientos al año — uno antes de la temporada
 *   de enfriamiento, uno antes de la temporada de calefacción — más prioridad
 *   para agendar, descuentos de miembro más altos en reparaciones y diagnósticos.
 *   La mejor opción para dueños que quieren tranquilidad todo el año.
 *   [NOTE: the frozen ES also lists "sin cargos por servicio fuera de horario" —
 *    that is the §7.1 after-hours waiver; OMIT until JC resolves the drift.]
 * Additional System Add-On (ES): ¿Tiene más de un sistema HVAC en su casa?
 *   Cubrimos cada sistema adicional independiente por $99/año o $9.99/mes
 *   adicional a su plan. Nota: una bomba de calor (heat pump) que da calefacción
 *   y enfriamiento cuenta como un sistema, no dos.
 */
