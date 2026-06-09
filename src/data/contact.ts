/*
 * Contact page copy (from Docs/contact.md). NAP/hours are NOT duplicated here —
 * the page pulls them from ./business.ts (single source of truth). Directus swap.
 */
export const contact = {
  seo: {
    title: 'Contact NewGen HVAC — Methuen, MA | (978) 876-8558',
    metaDescription:
      'Contact NewGen HVAC for HVAC, refrigeration, and kitchen equipment service in Methuen and the Merrimack Valley. Call (978) 876-8558 or request a free estimate. 24/7 emergency.',
  },
  hero: {
    heading: "Let's Get It Fixed",
    subcopy: "Call, email, or request a free estimate. For emergencies, we're available 24/7.",
  },
  form: {
    heading: 'Request service or a free estimate',
    subheading: "Tell us what's going on and we'll get right back to you.",
    serviceOptions: [
      'Commercial HVAC',
      'Residential HVAC',
      'Commercial Refrigeration',
      'Kitchen Equipment',
      'Comfort Plan',
      'Other',
    ],
    languageOptions: ['English', 'Español'],
    submitLabel: 'Send Request',
    // Verbatim from Docs/contact.md (compliant SMS consent wording — keep as-is).
    smsConsent:
      'I agree to receive SMS text messages from New Generation HVAC LLC for appointment updates, reminders, and customer care notifications. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out.',
  },
  serviceAreaNote:
    'Serving Methuen, Lawrence, Haverhill, Andover, North Andover, Lowell, and the Merrimack Valley, plus Salem, Windham, Derry, and Southern New Hampshire.',
};
