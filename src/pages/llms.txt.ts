import type { APIRoute } from 'astro';
import { business } from '../data/business';
import { serviceDetails } from '../data/service-details';
import { tiers, addOn } from '../data/comfort-plan';
import { towns } from '../data/service-areas';

export const prerender = true;

/*
 * /llms.txt — llmstxt.org-style summary for LLMs / AI crawlers. Generated from
 * the same data the site uses, so it stays in sync and respects the guardrails:
 * frozen Comfort Plan prices, no internal hourly rates (§6.1), no paused
 * hood-cleaning service (§6.3). The blog is hidden, so it is not linked.
 */
export const GET: APIRoute = () => {
  const site = 'https://newgenhvac.com';
  const addr = business.address;

  const services = Object.entries(serviceDetails)
    .map(([slug, svc]) => {
      const items = svc.features.items.map((i) => i.title).join(', ');
      return `- [${svc.breadcrumb}](${site}/services/${slug}): ${items}.`;
    })
    .join('\n');

  const plans =
    tiers.map((t) => `${t.name} ${t.priceAmount}${t.pricePeriod}`).join('; ') +
    `; ${addOn.name} ${addOn.priceAmount}${addOn.pricePeriod} (residential only).`;

  const featuredTowns = towns
    .filter((t) => 'page' in t)
    .map((t) => `- [${t.town}, ${t.state}](${site}/service-areas/${t.slug})`)
    .join('\n');

  const md = `# ${business.name} (${business.legalName})

> Bilingual (English/Español), family-run HVAC, commercial refrigeration, and commercial kitchen-equipment company based in ${addr.city}, ${addr.state}, serving the ${business.areaLabel} since 2014. Lead differentiators: in-house commercial refrigeration (most residential shops can't do it) and full bilingual service. 24/7 emergency service for commercial clients. Free estimates.

- Phone: ${business.phone.display}
- Email: ${business.email}
- Address: ${addr.street}, ${addr.city}, ${addr.state} ${addr.zip}
- Hours: ${business.hours.weekdaysLabel} ${business.hours.weekdaysValue}; ${business.hours.emergencyValue} emergency (commercial clients)
- Languages: English, Español
- Pricing: free estimates; no hourly rates published.

## Services
- [Services overview](${site}/services): one local shop for HVAC, refrigeration, and kitchen equipment.
${services}

## Comfort Plan (residential maintenance membership)
- [Comfort Plan](${site}/comfort-plan): seasonal tune-ups, priority scheduling, and member pricing on repairs. Plans: ${plans}

## Service areas
- [Service Areas](${site}/service-areas): Merrimack Valley & Greater Lowell (MA) and Southern New Hampshire.
${featuredTowns}

## Company
- [About](${site}/about): owner-run, family-operated, bilingual; founded 2014 by Jean Carlos Alcántara.
- [Contact](${site}/contact): call, email, or request a free estimate.

## Legal
- [Privacy Policy](${site}/privacy)
- [Terms of Service](${site}/terms)
`;

  return new Response(md, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
