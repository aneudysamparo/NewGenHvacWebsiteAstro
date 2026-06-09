/*
 * Service Areas content. Structure from Docs/_template-and-list.md +
 * Docs/01-site-architecture.md. Index at /service-areas lists the FULL real
 * footprint; per-town pages at /service-areas/[slug] are generated ONLY for the
 * featured subset (towns with a `page`). Directus swap point (`service_areas`).
 *
 * GUARDRAIL §6.4 / §9: real footprint only, ONE unique local hook per town, NO
 * thin mass-produced pages. Per the owner's call (and the doc's "fewer strong
 * pages beat more weak ones"), only the high-value towns get dedicated pages for
 * now; every other town is still listed on the index (we serve them all).
 *
 * TODO(service-areas): towns WITHOUT a dedicated page yet (index-only) — add
 * `page` content when we expand: Dracut MA, Chelmsford MA, Billerica MA,
 * Amesbury MA, Merrimac MA, Salisbury MA, Georgetown MA, Boxford MA, Newbury MA,
 * West Newbury MA, Rowley MA, Topsfield MA, Windham NH, Plaistow NH, Atkinson NH,
 * Londonderry NH, Hudson NH, Hampstead NH, Danville NH. (19 pending.)
 */

export const index = {
  title:
    'Service Areas — HVAC & Refrigeration Across the Merrimack Valley & Southern NH | NewGen HVAC',
  metaDescription:
    'NewGen HVAC serves Methuen, Lawrence, Haverhill, Andover, Lowell, and the Merrimack Valley, plus Salem, Windham, and Southern New Hampshire. Bilingual HVAC & refrigeration. (978) 876-8558.',
  heading: 'Serving the Merrimack Valley & Southern New Hampshire',
  intro:
    'From our base in Methuen, we cover homes and businesses across the Merrimack Valley and into Southern New Hampshire — HVAC, commercial refrigeration, and kitchen equipment, in English and Spanish. Find your town below, or call us.',
  featuredNote: 'Towns below link to a local page. Not listed? We very likely still serve you — just ask.',
};

/*
 * The full real footprint. `page` present = a dedicated /service-areas/[slug]
 * page is generated. Towns without `page` are listed on the index only.
 * `nearby` references other FEATURED slugs so internal links never 404.
 */
export const towns = [
  // ===== Massachusetts — Merrimack Valley & Greater Lowell =====
  {
    town: 'Methuen', state: 'MA', slug: 'methuen-ma',
    hook: 'Our home base — the fastest response in the area, residential and commercial.',
    page: {
      localIntro:
        "Methuen is home — our shop is here, so it's the town we reach fastest. We cover everything from a family's furnace or heat pump to a restaurant's walk-in cooler and rooftop units, for homeowners and businesses across the city, with 24/7 emergency service for our commercial clients.",
      nearby: ['lawrence-ma', 'andover-ma', 'haverhill-ma', 'pelham-nh'],
    },
  },
  {
    town: 'Lawrence', state: 'MA', slug: 'lawrence-ma',
    hook: 'Dense, heavily Spanish-speaking city — our bilingual service and restaurant refrigeration are a strong fit.',
    page: {
      localIntro:
        'Lawrence is a dense, vibrant, heavily Spanish-speaking city — and bilingual service isn’t a courtesy for us, it’s how we work (hablamos español). It’s also restaurant country, where our commercial refrigeration and kitchen-equipment work keeps walk-ins cold and the line moving. We’re minutes from our Methuen shop, so response is fast.',
      nearby: ['methuen-ma', 'andover-ma', 'north-andover-ma', 'haverhill-ma'],
    },
  },
  {
    town: 'Haverhill', state: 'MA', slug: 'haverhill-ma',
    hook: 'Older homes needing heat-pump/mini-split upgrades plus a growing downtown food scene.',
    page: {
      localIntro:
        'Haverhill mixes older homes that are ideal candidates for heat-pump and mini-split upgrades with a growing downtown food scene. We handle both sides: high-efficiency residential HVAC for the houses, and refrigeration plus kitchen-equipment repair for the restaurants and cafés. A short drive north from our Methuen base.',
      nearby: ['methuen-ma', 'lawrence-ma', 'andover-ma', 'salem-nh'],
    },
  },
  {
    town: 'Andover', state: 'MA', slug: 'andover-ma',
    hook: 'Larger single-family homes; high-efficiency HVAC, heat pumps, and Comfort Plan memberships.',
    page: {
      localIntro:
        'Andover’s larger single-family homes are perfect for high-efficiency HVAC, cold-climate heat pumps, and Comfort Plan memberships that keep everything tuned year-round. We install and service it all and explain your options in plain language — with quick response from neighboring Methuen.',
      nearby: ['north-andover-ma', 'methuen-ma', 'lawrence-ma', 'tewksbury-ma'],
    },
  },
  {
    town: 'North Andover', state: 'MA', slug: 'north-andover-ma',
    hook: 'Residential HVAC and light commercial; a quick hop from Methuen.',
    page: {
      localIntro:
        'North Andover is a quick hop from our Methuen shop, so we’re there fast for both residential HVAC and light commercial work. From heat-pump installs and AC repair to keeping a small business comfortable, we cover it — in English or Spanish.',
      nearby: ['andover-ma', 'methuen-ma', 'lawrence-ma', 'haverhill-ma'],
    },
  },
  { town: 'Dracut', state: 'MA', slug: 'dracut-ma', hook: 'Neighboring town; residential heating/cooling and emergency service.' },
  {
    town: 'Tewksbury', state: 'MA', slug: 'tewksbury-ma',
    hook: 'Homes plus commercial plazas and restaurants (refrigeration + kitchen equipment).',
    page: {
      localIntro:
        'Tewksbury blends residential neighborhoods with commercial plazas and restaurants along its corridors — so we’re as likely to be tuning a home’s furnace as fixing a plaza restaurant’s walk-in or fryer line. One local shop for both your HVAC and your refrigeration.',
      nearby: ['lowell-ma', 'andover-ma', 'north-andover-ma', 'methuen-ma'],
    },
  },
  {
    town: 'Lowell', state: 'MA', slug: 'lowell-ma',
    hook: 'City with a dense restaurant scene; refrigeration, kitchen equipment, and commercial HVAC.',
    page: {
      localIntro:
        'Lowell’s dense restaurant and food scene is right in our wheelhouse: commercial refrigeration, kitchen-equipment repair, and commercial HVAC that keep busy kitchens running. We also serve Lowell homeowners with heat pumps, AC, and heating — with fast response across the city.',
      nearby: ['tewksbury-ma', 'andover-ma', 'north-andover-ma', 'methuen-ma'],
    },
  },
  { town: 'Chelmsford', state: 'MA', slug: 'chelmsford-ma', hook: 'Residential heat pumps and AC; suburban single-family focus.' },
  { town: 'Billerica', state: 'MA', slug: 'billerica-ma', hook: 'Residential and commercial mix along the Route 3 corridor.' },
  { town: 'Amesbury', state: 'MA', slug: 'amesbury-ma', hook: 'Northern Merrimack Valley homes and small businesses.' },
  { town: 'Merrimac', state: 'MA', slug: 'merrimac-ma', hook: 'Small-town residential service.' },
  { town: 'Salisbury', state: 'MA', slug: 'salisbury-ma', hook: 'Coastal homes and seasonal restaurants (refrigeration matters here).' },
  { town: 'Georgetown', state: 'MA', slug: 'georgetown-ma', hook: 'Residential HVAC and maintenance memberships.' },
  { town: 'Boxford', state: 'MA', slug: 'boxford-ma', hook: 'Larger rural homes; heat pumps, mini-splits, multi-system Comfort Plans.' },
  { town: 'Newbury', state: 'MA', slug: 'newbury-ma', hook: 'Residential and small commercial.' },
  { town: 'West Newbury', state: 'MA', slug: 'west-newbury-ma', hook: 'Residential service area.' },
  { town: 'Rowley', state: 'MA', slug: 'rowley-ma', hook: 'Homes and small food businesses.' },
  { town: 'Topsfield', state: 'MA', slug: 'topsfield-ma', hook: 'Residential HVAC and refrigeration for local businesses.' },

  // ===== Southern New Hampshire =====
  {
    town: 'Salem', state: 'NH', slug: 'salem-nh',
    hook: 'Major NH commercial/retail hub over the line; restaurants and businesses for refrigeration + HVAC.',
    page: {
      localIntro:
        'Salem is the major commercial and retail hub right over the New Hampshire line, packed with restaurants and businesses that depend on reliable cooling. Our commercial refrigeration and HVAC work is a strong fit here, and we’re minutes from Methuen for fast service — including 24/7 emergencies for commercial clients.',
      nearby: ['methuen-ma', 'pelham-nh', 'derry-nh', 'haverhill-ma'],
    },
  },
  { town: 'Windham', state: 'NH', slug: 'windham-nh', hook: 'Growing residential town; heat pumps and AC.' },
  {
    town: 'Pelham', state: 'NH', slug: 'pelham-nh',
    hook: 'Borders Methuen; fast response, residential + commercial.',
    page: {
      localIntro:
        'Pelham borders Methuen, so it’s one of the fastest towns for us to reach — residential or commercial. Whether it’s a heat-pump install, an AC repair, or emergency service for a business, we’re right next door, with bilingual service when you need it.',
      nearby: ['methuen-ma', 'salem-nh', 'lawrence-ma', 'derry-nh'],
    },
  },
  { town: 'Plaistow', state: 'NH', slug: 'plaistow-nh', hook: 'Homes and commercial plazas near the MA line.' },
  { town: 'Atkinson', state: 'NH', slug: 'atkinson-nh', hook: 'Residential service area.' },
  {
    town: 'Derry', state: 'NH', slug: 'derry-nh',
    hook: 'Larger NH town; residential HVAC plus restaurant refrigeration/kitchen equipment.',
    page: {
      localIntro:
        'Derry is one of Southern New Hampshire’s larger towns, with established neighborhoods and a solid restaurant scene. We cover residential HVAC — heat pumps, AC, and heating — plus restaurant refrigeration and kitchen-equipment repair for local food businesses.',
      nearby: ['salem-nh', 'pelham-nh', 'methuen-ma', 'haverhill-ma'],
    },
  },
  { town: 'Londonderry', state: 'NH', slug: 'londonderry-nh', hook: 'Residential and commercial along Route 28/93.' },
  { town: 'Hudson', state: 'NH', slug: 'hudson-nh', hook: 'Homes and businesses west of Salem.' },
  { town: 'Hampstead', state: 'NH', slug: 'hampstead-nh', hook: 'Residential service area.' },
  { town: 'Danville', state: 'NH', slug: 'danville-nh', hook: 'Small-town residential service.' },
] as const;

export type Town = (typeof towns)[number];
