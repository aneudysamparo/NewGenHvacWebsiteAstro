/*
 * Service detail pages content — one entry per service, keyed by URL slug.
 * Rendered by a single template (components/service-detail/ServiceDetail.astro)
 * via the dynamic route src/pages/services/[slug].astro. Layout from the Stitch
 * screen "Service Detail - Commercial Refrigeration Repair". Copy grounded in the
 * Docs/*.md service pages (source of truth). Directus swap point.
 *
 * GUARDRAILS applied vs the Stitch template:
 *  - Dropped the "Licensed & Insured" feature card (claim not in business-facts).
 *  - Replaced the "15+ Years" badge with "Since 2014" (founded 2014 = ~12 yrs).
 *  - §6.3: the kitchen doc lists "exhaust fan service" + "make-up air systems"
 *    (mechanical repair, distinct from the PAUSED NFPA-96 hood CLEANING). Because
 *    it brushes the paused area, those two are OMITTED pending JC's confirmation
 *    (per §9) — do not add back without the owner's OK.
 */

export const serviceDetails = {
  'commercial-refrigeration': {
    breadcrumb: 'Commercial Refrigeration',
    image: '/images/services/new-gen-hvac-commercial-refrigeration.png',
    leadService: 'commercial',
    seo: {
      title: 'Commercial Refrigeration Repair — Walk-Ins, Freezers & Ice Machines | NewGen HVAC',
      description:
        'Commercial refrigeration repair & installation in the Merrimack Valley: walk-in coolers, freezers, reach-ins, ice machines, leak detection. Fast response that protects your inventory. (978) 876-8558.',
    },
    hero: {
      badge: 'Our Lead Specialty',
      title: 'Keep Your Inventory Cold — and Your Doors Open',
      subcopy:
        "Reliable refrigeration is the backbone of any food business. When a walk-in or freezer starts climbing, every hour costs you product and revenue. We provide expert installation and fast repair for walk-in coolers, freezers, reach-in units, and ice machines across the Merrimack Valley and Southern New Hampshire — the work most residential HVAC shops can't do.",
      stat: { icon: 'timer', label: 'Available', value: '24/7 Service' },
    },
    features: {
      heading: 'Key Features & Benefits',
      subcopy: 'Comprehensive commercial refrigeration solutions that protect your inventory.',
      items: [
        { icon: 'ac_unit', accent: 'secondary', title: 'Walk-in Coolers & Freezers', desc: 'Repair and installation that holds safe, steady temperatures.' },
        { icon: 'kitchen', accent: 'secondary', title: 'Reach-in Units', desc: 'Service for prep tables, merchandisers, and reach-ins.' },
        { icon: 'icecream', accent: 'secondary', title: 'Ice Machines', desc: 'Install, clean, and repair Hoshizaki, Manitowoc, and more.' },
        { icon: 'mode_fan', accent: 'primary', title: 'Evaporators & Condensers', desc: 'Diagnostics and service for the heart of your cooling.' },
        { icon: 'sensors', accent: 'emergency-orange', title: 'Refrigerant Leak Detection', desc: 'We find and fix leaks before they cost you product.' },
        { icon: 'settings', accent: 'primary', title: 'Compressor Replacements', desc: 'Expert replacement to bring failed systems back online.' },
      ],
    },
    specialty: {
      heading: 'Refrigeration Is Our Specialty',
      body: "Our technicians handle the complex side of refrigeration: refrigerant leak detection, compressor replacements, evaporator and condenser service, and low-ambient cooling. For restaurants, markets, c-stores, and food distributors, we're the one shop that covers both your HVAC and your refrigeration — so you're not juggling vendors when something fails. Ask us about a preventive maintenance schedule that keeps your equipment within food-safe temperatures and heads off the emergency call entirely.",
      checklist: ['Bilingual service (EN/ES)', '24/7 emergency response', 'HVAC & refrigeration in one shop', 'Honest, upfront pricing'],
      stat: { value: 'Since 2014', label: 'Local & bilingual' },
    },
    faqs: [
      { q: "My walk-in isn't cooling — what should I do right now?", a: "Check that the thermostat is set correctly and the door is fully closed. If it's still not cooling, call us immediately for emergency service to prevent spoilage — the sooner we're on it, the more product you save." },
      { q: 'Do you service ice machines?', a: 'Yes — we install, clean, and repair all major commercial ice machine brands, including Hoshizaki and Manitowoc.' },
      { q: 'Can you set up a maintenance schedule for our equipment?', a: "Absolutely. Regular checks for leaks and mechanical wear catch problems before they shut you down. We'll build a schedule around your equipment and how hard you run it." },
    ],
  },

  'commercial-hvac': {
    breadcrumb: 'Commercial HVAC',
    image: '/images/services/new-gen-hvac-commercial-hvac.png',
    leadService: 'commercial',
    seo: {
      title: 'Commercial HVAC Services — RTUs, Heat Pumps & Repair | NewGen HVAC',
      description:
        'Commercial HVAC installation, replacement, and 24/7 repair in the Merrimack Valley & Southern NH — rooftop units, Mitsubishi Hyper-Heat, furnaces, boilers. Call (978) 876-8558.',
    },
    hero: {
      badge: 'Commercial HVAC',
      title: 'Reliable Climate Control for Your Business',
      subcopy:
        'When your heating or cooling goes down, so does your business. We install, replace, and repair commercial HVAC systems across the Merrimack Valley and Southern New Hampshire — from rooftop units to complex heat pump systems — and we back it with 24/7 emergency service.',
      stat: { icon: 'timer', label: 'Available', value: '24/7 Service' },
    },
    features: {
      heading: 'Key Features & Benefits',
      subcopy: 'Comprehensive commercial heating and cooling, installed and repaired right.',
      items: [
        { icon: 'roofing', accent: 'primary', title: 'Rooftop Units (RTUs)', desc: 'Installation, replacement, and repair for commercial RTUs.' },
        { icon: 'heat_pump', accent: 'secondary', title: 'Mitsubishi Hyper-Heat', desc: 'Cold-climate, low-ambient systems built for New England.' },
        { icon: 'local_fire_department', accent: 'emergency-orange', title: 'Furnace & Boiler Diagnostics', desc: 'Accurate diagnosis to restore heat fast.' },
        { icon: 'emergency', accent: 'emergency-orange', title: '24/7 Emergency Repairs', desc: 'Commercial clients get round-the-clock response.' },
        { icon: 'build', accent: 'primary', title: 'Preventive Maintenance', desc: 'Scheduled service plans that head off breakdowns.' },
        { icon: 'energy_savings_leaf', accent: 'secondary', title: 'Energy Efficiency', desc: 'Assessments that find savings and reduce wear.' },
      ],
    },
    specialty: {
      heading: 'Expert Commercial Solutions',
      body: 'Our work covers Mitsubishi Hyper-Heat and low-ambient systems, furnace and boiler diagnostics, and preventive maintenance plans built around your building and your budget. We service all major commercial brands — Carrier, Trane, Lennox, York — and we’re experts in Mitsubishi systems. Whether you manage a restaurant, a storefront, or a multi-unit building, we keep the space comfortable so you can focus on running it.',
      checklist: ['Bilingual service (EN/ES)', '24/7 emergency response', 'All major commercial brands', 'Honest, upfront pricing'],
      stat: { value: 'Since 2014', label: 'Local & bilingual' },
    },
    faqs: [
      { q: 'Do you install rooftop units (RTUs)?', a: 'Yes — we specialize in the installation and replacement of commercial rooftop units for all types of commercial buildings, and we service the ones you already have.' },
      { q: 'What brands do you service?', a: "All major commercial HVAC brands, including Carrier, Trane, Lennox, and York. We're also experts in Mitsubishi systems." },
      { q: 'Do you offer emergency service?', a: "Yes. Commercial clients get 24/7 emergency response so a failed system doesn't shut you down." },
    ],
  },

  'residential-hvac': {
    breadcrumb: 'Residential HVAC',
    image: '/images/services/new-gen-hvac-residential-hvac.png',
    leadService: 'cooling',
    showMembership: true,
    seo: {
      title: 'Residential HVAC — Mini-Splits, Heat Pumps & AC Repair | NewGen HVAC',
      description:
        'Home HVAC service in the Merrimack Valley: high-efficiency mini-splits, heat pumps, AC repair, and furnace tune-ups. Bilingual, family-run since 2014. Call (978) 876-8558.',
    },
    hero: {
      badge: 'Residential HVAC',
      title: 'Home Comfort You Can Trust',
      subcopy:
        'Keep your family comfortable in every season. We install and service high-efficiency mini-splits, heat pumps, and central air systems for homes across the Merrimack Valley and Southern New Hampshire — and we explain your options in plain language, English or Spanish.',
      stat: { icon: 'history', label: 'Family-run', value: 'Since 2014' },
    },
    features: {
      heading: 'Key Features & Benefits',
      subcopy: 'Comprehensive home comfort, from install to seasonal tune-up.',
      items: [
        { icon: 'ac_unit', accent: 'secondary', title: 'Mini-Split Installation', desc: 'High-efficiency Mitsubishi and Carrier systems.' },
        { icon: 'heat_pump', accent: 'secondary', title: 'High-Efficiency Heat Pumps', desc: 'The biggest comfort-and-savings upgrade for most MA homes.' },
        { icon: 'build', accent: 'primary', title: 'AC Repair & Tune-Ups', desc: 'Keep cooling efficient and catch issues early.' },
        { icon: 'local_fire_department', accent: 'emergency-orange', title: 'Furnace Preparation', desc: 'Get ahead of New England winters.' },
        { icon: 'thermostat', accent: 'primary', title: 'Smart Thermostats', desc: 'Modern controls for comfort and savings.' },
        { icon: 'air', accent: 'secondary', title: 'Indoor Air Quality', desc: 'Breathe easier with cleaner, healthier air.' },
      ],
    },
    specialty: {
      heading: 'Efficient Home Heating & Cooling',
      body: 'Whether you need a seasonal tune-up, a new installation, or an emergency repair, we deliver professional service with a focus on energy efficiency and indoor air quality. We work on all major brands, install Mitsubishi and Carrier mini-splits, and help you get ahead of New England winters with furnace prep and smart controls. Ask us about heat pumps — they’re the biggest comfort-and-savings upgrade most homes in Massachusetts can make.',
      checklist: ['Bilingual service (EN/ES)', 'Family-run since 2014', 'Energy-efficiency focused', 'Honest, upfront pricing'],
      stat: { value: 'Since 2014', label: 'Local & bilingual' },
    },
    faqs: [
      { q: 'How often should I service my AC?', a: 'At least once a year, ideally in spring before the cooling season starts. Regular service keeps efficiency up and catches small issues before they become breakdowns.' },
      { q: 'Are heat pumps worth it in New England?', a: "Modern cold-climate heat pumps handle our winters well and can cut energy costs. Massachusetts also offers strong incentives on qualifying installs — ask us and we'll walk you through whether it makes sense for your home." },
      { q: 'Do you offer financing?', a: 'Contact our office for current financing options and seasonal promotions on new system installs.' },
    ],
  },

  'commercial-kitchen-equipment': {
    breadcrumb: 'Commercial Kitchen Equipment',
    image: '/images/services/new-gen-hvac-commercial-kitchen-equipment.png',
    leadService: 'commercial',
    seo: {
      title: 'Commercial Kitchen Equipment Repair — Fryers, Ovens & Griddles | NewGen HVAC',
      description:
        'Fast commercial kitchen equipment repair in the Merrimack Valley: fryers, ovens, griddles, burners, gas valves, and safety controls. Minimize downtime. Call (978) 876-8558.',
    },
    hero: {
      badge: 'Commercial Kitchens',
      title: 'Get Your Kitchen Back Up Fast',
      subcopy:
        'In a commercial kitchen, every piece of equipment earns its place on the line. When a fryer, oven, or griddle goes down, it hits your menu and your bottom line. We repair and service commercial cooking equipment across the Merrimack Valley and Southern New Hampshire, with a focus on minimizing downtime so you can keep serving.',
      stat: { icon: 'timer', label: 'Available', value: '24/7 Service' },
    },
    features: {
      heading: 'Key Features & Benefits',
      subcopy: 'Repair and safety service for the equipment your kitchen runs on.',
      // NOTE (§6.3): "Exhaust fan service" + "Make-up air systems" from the doc are
      // intentionally omitted here pending JC's OK (adjacent to paused hood cleaning).
      items: [
        { icon: 'restaurant', accent: 'primary', title: 'Fryers, Ovens & Griddles', desc: 'Fast repair for the equipment your menu runs on.' },
        { icon: 'local_fire_department', accent: 'emergency-orange', title: 'Pilot Assemblies & Burners', desc: 'Reliable ignition and even, consistent heat.' },
        { icon: 'gas_meter', accent: 'primary', title: 'Ignition & Gas Valves', desc: 'Safe, precise gas control and repair.' },
        { icon: 'shield', accent: 'secondary', title: 'Safety Controls', desc: 'Calibration that keeps cooking safe and predictable.' },
      ],
    },
    specialty: {
      heading: 'Kitchen Equipment Specialists',
      body: "We handle pilot assemblies, burners, ignition systems, gas valves, thermostats, and safety controls. Beyond repairs, we calibrate safety controls so your equipment runs safely and consistently — which extends the life of your appliances and keeps your cooking results predictable. Safety is the priority: if there's a gas issue, we find it and fix it.",
      checklist: ['Bilingual service (EN/ES)', 'Fast response to limit downtime', 'Gas safety expertise', 'Honest, upfront pricing'],
      stat: { value: 'Since 2014', label: 'Local & bilingual' },
    },
    faqs: [
      { q: 'Do you repair commercial ovens?', a: 'Yes — we repair commercial convection, pizza, and standard ovens, along with most other cooking equipment.' },
      { q: 'Can you fix gas leaks?', a: 'Yes. Safety is our priority — we detect and repair gas leaks in kitchen equipment and piping.' },
      { q: 'How fast can you get out for a repair?', a: "We know kitchen downtime is expensive and prioritize these calls. Call us and we'll get you scheduled as fast as possible." },
    ],
  },
} as const;

export type ServiceDetail = (typeof serviceDetails)[keyof typeof serviceDetails];
