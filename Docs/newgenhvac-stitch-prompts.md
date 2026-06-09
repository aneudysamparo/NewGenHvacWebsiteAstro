# Google Stitch Prompt — NewGen HVAC (Clean / Modern-Professional)

You're generating **design only** in Stitch. Claude Code will rebuild it in Astro and wire it to
Directus afterward — so this prompt emphasizes *modular, repeatable sections* (not one-off art) so
the output maps to components. It uses your real logo palette.

## How to use
1. In Stitch, start a project and **upload your horizontal logo**.
2. Paste the **Global design system** block first, then generate **one page at a time** by
   appending that page's section. Keeping the global block identical across generations is what
   keeps the screens consistent.
3. For the homepage, generate **both Version 1 and Version 2** and compare — Version 2 adds an
   inline lead-capture form to the hero.
4. Export (Figma or HTML/CSS) → hand to Claude Code (the MCP/Figma route works too). Handoff
   prompt is at the bottom of this file.

Shared facts this prompt assumes: NewGen HVAC (New Generation HVAC LLC), Methuen MA, serving the
Merrimack Valley + Southern NH, bilingual English/Spanish, family-run since 2014. Phone
**(978) 876-8558**, 24/7 emergency. Services: Commercial HVAC, Residential HVAC, Commercial
Refrigeration (lead specialty), Commercial Kitchen Equipment, plus the residential **Comfort Plan**
membership. Tagline: "From Airflow to Exhaust — We've Got You Covered."

---

## GLOBAL DESIGN SYSTEM (paste first, every time)

Design a clean, modern, trustworthy website for **NewGen HVAC**, a bilingual family-run HVAC and
commercial refrigeration company in Methuen, Massachusetts (serving the Merrimack Valley and
Southern New Hampshire since 2014). The feeling: professional, calm, premium-local — like a
high-end home-services brand a homeowner OR a restaurant owner instantly trusts. Mobile-first and
fully responsive.

**Color palette (from the brand logo):**
- Primary deep blue `#205B86` (headers, primary buttons, links)
- Cooling blue `#2F7CAF` (secondary accents, icons, "cooling/refrigeration" sections)
- Heating red-orange `#D93A21` (RESERVED for urgent/emergency CTAs and "heating" accents only — use sparingly so it stays loud)
- Steel gray `#C0C0C0` and slate `#5B6B78` (secondary text, borders)
- Backgrounds: white `#FFFFFF` and very light gray `#F7F9FB`
- Text: near-black `#16202A`

**Typography:** Clean geometric sans. Headings in "Manrope" or "Plus Jakarta Sans" (semibold/bold);
body in "Inter". Generous line-height, lots of whitespace.

**Visual style:** Bright and airy. Rounded cards (12–16px radius) with soft shadows. Real photography
of clean equipment and friendly technicians. A subtle **blue→red gradient hairline** as a recurring
accent (the airflow-to-exhaust motif). Simple line icons. No clutter.

**Global components:**
- **Sticky header:** horizontal logo left; nav (Services dropdown, Comfort Plan, Service Areas,
  Blog, About); right side has an **EN/ES toggle**, a tap-to-call phone `(978) 876-8558`, and a
  solid blue **"Free Estimate"** button. On mobile: hamburger + a persistent tap-to-call.
- **Trust badges row:** "Bilingual · Since 2014 · Commercial Refrigeration Specialists · 24/7 Emergency."
- **Service card** (reusable): icon, title, one-line description, "Learn more" link.
- **Feature/benefit list:** checkmark bullets.
- **FAQ accordion.**
- **Testimonial card:** 5 gold stars, quote, name + role (e.g. "Restaurant Owner, Lawrence"),
  small "via Google" tag.
- **Pricing tier card:** plan name, big price, "/year" + "/month", bullet benefits, CTA button.
- **Lead-capture form card** (reusable): compact card titled "Request Your Free Estimate" with
  fields Name, Phone, Email, Service needed (dropdown), Town/ZIP, Preferred language (EN/ES), and a
  solid blue "Get My Free Estimate" button; reassurance line under it ("No obligation · Fast
  callback · Hablamos Español").
- **CTA band:** blue background, white heading, "Free Estimate" + phone.
- **Footer:** NAP (Annis St, Methuen, MA 01844 · (978) 876-8558 · jc@newgenhvac.com), hours
  (Mon–Fri 8–5, 24/7 Emergency), service links, service-area links, social icons, EN/ES, legal.
- **Sticky mobile "Call Now" bar** at bottom.
Design each section as a clean, self-contained block (for component reuse).

## PAGE: Home — VERSION 1 (CTA-led hero)
Hero: headline "HVAC & Commercial Refrigeration You Can Count On", subhead about bilingual,
family-run since 2014, home comfort to walk-in coolers; two CTAs ("Get a Free Estimate" solid blue,
"Call (978) 876-8558 · 24/7" outline). Hero image: clean technician/equipment. Below: trust badges
row → 4 service cards (Commercial HVAC, Residential HVAC, Commercial Refrigeration, Commercial
Kitchen Equipment) → "Why NewGen" 4-up differentiators (bilingual, refrigeration specialty, local &
fast, honest since 2014) → Comfort Plan teaser strip ("Plans from $249/yr", CTA) → service-areas
mini map/list → testimonials (3 Google-style cards) → final CTA band.

## PAGE: Home — VERSION 2 (lead-capture hero)
Same page as Version 1, but the hero is a **two-column split**: LEFT = headline "HVAC & Commercial
Refrigeration You Can Count On", subhead, trust badges, and a tap-to-call phone line; RIGHT = the
**lead-capture form card** ("Request Your Free Estimate", fields: Name, Phone, Email, Service needed
dropdown, Town/ZIP, Preferred language, "Get My Free Estimate" button, reassurance line). The form
sits in a white card with a soft shadow over a subtle blue→red gradient or a clean equipment photo.
On mobile, the form stacks directly under the headline (still above the fold-ish). Everything below
the hero is identical to Version 1 (service cards, why-us, Comfort Plan strip, areas, testimonials,
CTA band). Build note: form posts to Jobber/GoHighLevel; include the SMS-consent fine print.

## PAGE: About
Hero with tagline "From Airflow to Exhaust — We've Got You Covered." Sections: our story (founded
2014 by Jean Carlos Alcántara, owner-run, not a call center), "What makes us different" (bilingual,
refrigeration expertise, honest work) as 3 cards, who we serve, a simple 4-step "How we work"
(Consultation → Service/Install → Maintenance → 24/7 Emergency) with icons, CTA band.

## PAGE: Services (index)
Hero + intro. A grid of the 4 service cards (larger, with image headers). A Comfort Plan callout
strip. CTA band. Each card links to a service detail page.

## PAGE: Service Detail (TEMPLATE — design once, applies to all 4; use Commercial Refrigeration as the example)
Breadcrumb. Hero: service title "Commercial Refrigeration Repair", one-line promise, "Free Estimate"
+ tap-to-call. Intro paragraph. A "Key features & benefits" checklist (6 items, two columns). A
secondary section with supporting image ("Refrigeration is our specialty"). An FAQ accordion (3
Q&As). A related-blog-post link. CTA band. (Color-code subtly: refrigeration/cooling pages lean blue
`#2F7CAF`; heating-related accents use red `#D93A21`.)

## PAGE: Comfort Plan
Hero: "Keep Your Home Comfortable All Year", subhead about tune-ups + priority + member repair
pricing. **Three pricing tier cards:** Comfort Plan ($249/yr · $24.99/mo · 1 tune-up/system),
Comfort Plan Plus ($348/yr · $34.98/mo · 2 tune-ups/system — mark "Best Value"), Additional System
Add-On (+$99/yr · +$9.99/mo). A "How systems are counted" explainer box (heat pump = one system).
"Why join" benefits. FAQ accordion. CTA band ("Become a Member" + phone). Residential-focused, warm.

## PAGE: Service Areas (index)
Hero. Intro about coverage from Methuen. Two columns of town links grouped "Massachusetts" and
"Southern New Hampshire." A simple coverage map graphic. CTA.

## PAGE: Service Area (TEMPLATE — town page; use "Methuen, MA")
Hero "HVAC & Commercial Refrigeration in Methuen, MA" + local one-liner + CTAs. The 4 services as
compact cards. "Why [Town] chooses NewGen" trust row. Nearby-areas links. LocalBusiness trust block
(address, hours, phone). CTA band.

## PAGE: Blog (index)
Hero "HVAC & Refrigeration Tips." Featured post card on top, then a responsive grid of post cards
(image, title, date, excerpt, tag). Sidebar or filter by category optional. Clean and readable.

## PAGE: Blog Post (article)
Breadcrumb. Large title, date, author "NewGen HVAC", hero image. Readable article body column
(max ~720px) with H2s and bullet lists. A related-service CTA box mid/end. "Related posts" row.
End CTA band. Strong typographic hierarchy for SEO readability.

## PAGE: Contact
Hero "Let's Get It Fixed." Two columns: left = contact details (phone tap-to-call, email, address,
Mon–Fri 8–5 + 24/7 emergency, EN/ES note); right = booking form (Name, Phone, Email, Service
dropdown, Town, Message, Preferred language) with the SMS-consent fine print and a blue "Request
Service" button. Embedded Google map below. Trust/area strip.

---

## After Stitch — handing to Claude Code
When the design is approved and exported, the Claude Code build prompt is roughly:
> "Build this Stitch design as an Astro site, mobile-first, bilingual EN/ES (i18n under /es/).
> Pull all content from my Directus instance (collections: globals, pages, services, comfort_plan,
> posts, service_areas, testimonials — see 01-site-architecture.md). Use the content kit for copy.
> Make every Stitch section a reusable Astro component bound to Directus fields — no hardcoded
> copy. Use the lead-capture form (Home V2) and contact form, posting to Jobber. Add LocalBusiness
> + FAQPage JSON-LD, tap-to-call, and 301 redirects from the removed old URLs. Rebuild on a
> Directus webhook."
