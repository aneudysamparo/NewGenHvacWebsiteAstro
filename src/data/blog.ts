/*
 * Blog helpers + index copy. The posts themselves live in the Astro content
 * collection (src/content/blog/*.md, schema in src/content.config.ts). Blog
 * hero images aren't shot yet, so we reuse each post's related-service photo.
 */

export const blogIndex = {
  title: 'Blog — HVAC & Refrigeration Tips | NewGen HVAC',
  metaDescription:
    'Practical HVAC, commercial refrigeration, and kitchen-equipment tips from NewGen HVAC — bilingual, family-run service across the Merrimack Valley & Southern NH.',
  heading: 'HVAC & Refrigeration Tips',
  subcopy:
    'Practical advice on heating, cooling, refrigeration, and keeping your equipment running — from our team to your home or business.',
};

const serviceImage: Record<string, string> = {
  'commercial-refrigeration': '/images/services/new-gen-hvac-commercial-refrigeration.png',
  'commercial-hvac': '/images/services/new-gen-hvac-commercial-hvac.png',
  'residential-hvac': '/images/services/new-gen-hvac-residential-hvac.png',
  'commercial-kitchen-equipment': '/images/services/new-gen-hvac-commercial-kitchen-equipment.png',
};

const serviceLabel: Record<string, string> = {
  'commercial-refrigeration': 'Commercial Refrigeration',
  'commercial-hvac': 'Commercial HVAC',
  'residential-hvac': 'Residential HVAC',
  'commercial-kitchen-equipment': 'Kitchen Equipment',
};

/** Hero/card image for a post — falls back to its related-service photo. */
export function postImage(relatedService?: string | null): string | null {
  return (relatedService && serviceImage[relatedService]) || null;
}

/** Human label for the post's category (its related service). */
export function postCategory(relatedService?: string | null): string | null {
  return (relatedService && serviceLabel[relatedService]) || null;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
