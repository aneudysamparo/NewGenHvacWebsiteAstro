---
title: "Spanish Mirror (i18n) — Plan & Guardrail"
lang: es
---

# Spanish mirror — how we'll do it

Bilingual service is one of your biggest advantages, and few competitors serve Spanish speakers
well online. A proper Spanish mirror is both an SEO play (you'll rank for Spanish-language HVAC
searches in Lawrence, Haverhill, etc.) and a conversion play.

## Approach
- **Routing:** Astro i18n under `/es/` (e.g. `/es/`, `/es/servicios/refrigeracion-comercial`,
  `/es/comfort-plan`). Each EN page links to its ES twin with `hreflang` tags so Google serves the
  right language.
- **Directus:** use native **Translations** on each collection (one translation row per locale) so
  EN and ES content live together and stay in sync.
- **Scope to start:** Home, the 4 service pages, Comfort Plan, About, Contact. Service-area and
  blog pages can follow.

## ⚠️ Guardrail — Comfort Plan Spanish wording
For the **Comfort Plan**, do **not** use a freestyle Spanish translation. The customer-facing
Spanish wording is locked in your "Official Comfort Plan Benefits (LOCKED)" / Pricing Structure
v2.0 §9 documents in Drive. Pull that **verbatim** for any Spanish Comfort Plan copy so quotes,
collateral, and the website all match. (General marketing pages can be translated normally — only
the Comfort Plan benefit/price wording is locked.)

## Example — Spanish home hero (general marketing, OK to translate)

**Heading:** Climatización y Refrigeración Comercial en las que Puede Confiar
**Subheading:** Empresa familiar y bilingüe, sirviendo a Methuen y el Merrimack Valley desde 2014 —
desde la comodidad de su hogar hasta el walk-in cooler que no puede fallar.
**CTA primario:** Solicite un Estimado Gratis
**CTA secundario:** Llame al (978) 876-8558 · Emergencias 24/7
**Trust strip:** Servicio bilingüe (English/Español) · Especialistas en refrigeración comercial · MA y el sur de NH

> Want me to generate the full Spanish mirror next? Once the English content is approved, I can
> translate Home, Services, About, and Contact in one pass, and pull the locked ES Comfort Plan
> wording from your Drive docs (or you paste it and I place it).
