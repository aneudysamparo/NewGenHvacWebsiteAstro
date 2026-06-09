# NewGen HVAC — New Website Content Kit

Clean, restructured content for the new SEO-focused Astro site, rebuilt from the current
newgenhvac.com and corrected against your real business (updated services, pricing, and
positioning). Organized so it drops into Astro content collections and maps 1:1 onto Directus.

## What's in here
```
00-business-facts.md         Single source of truth: NAP, hours, brand, service area,
                             Comfort Plan pricing (public) + service rates (INTERNAL only).
01-site-architecture.md      Sitemap, URLs, SEO + i18n strategy, and the Directus schema.
pages/
  home.md  about.md  services.md  contact.md  comfort-plan.md
  services/
    commercial-hvac.md  residential-hvac.md
    commercial-refrigeration.md  commercial-kitchen-equipment.md
blog/
  6 posts (original slugs kept). 5 live + 1 PARKED (hood cleaning, draft).
service-areas/
  _template-and-list.md      Per-town template + pruned, real-footprint town list w/ local hooks.
testimonials.md              Use real Google reviews — no placeholders.
_spanish/README.md           Spanish mirror (i18n) plan + guardrail on locked Comfort Plan wording.
```

## What changed from the old site (and why)
1. **Hood cleaning / NFPA-96 removed** — it's a paused service; advertising it would generate
   leads you can't fulfill. Cut from nav/hero/services; blog post parked (not deleted).
2. **Maintenance pricing fixed** — the old "$350/$500/$600" plans don't exist. Replaced with your
   real, frozen **Comfort Plan: $249 / $348 / +$99**, residential-only, locked tagline.
3. **Hourly rates removed from public pages** — old site published $150/$130 (both off). New site
   leads with "Free Estimate / Book Now." Real rates kept INTERNAL for forms/quotes.
4. **Service-area pages pruned** — from 35 (incl. Boston, Cambridge) to your real footprint, each
   with a unique local hook instead of thin duplicates.
5. **Fake testimonials dropped, hours/experience standardized** — real Google reviews only;
   Mon–Fri 8–5 + 24/7 emergency; "since 2014."
6. **Repositioned around the moat** — commercial refrigeration + bilingual + local Merrimack
   Valley, instead of treating six services as interchangeable. Spanish mirror planned.

## Open items to confirm before launch
- **Comfort Plan Plus "waived after-hours fees"** — conflicts with the $225 after-hours rule;
  left off the public page until you confirm which is canonical (see note in `comfort-plan.md`).
- **Final service-area list** — trim any town you don't actually drive to.
- **Real Google reviews** — pick the 4–6 to feature.

## Next steps
1. **Design:** generate the visual design in Google Stitch (prompt coming next).
2. **Build:** Claude Code scaffolds the Astro site and wires the Stitch design onto components.
3. **CMS:** Directus on your Dokploy holds the content (collections in `01-site-architecture.md`);
   Astro pulls from it at build time and rebuilds on a Directus webhook.
4. **Launch:** JSON-LD schema, 301 redirects from removed URLs, submit sitemap to Search Console.
