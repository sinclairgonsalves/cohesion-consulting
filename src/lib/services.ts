// Shared service / scope options for the inquiry forms (ContactSection and
// ContactUsModal). Both the consulting side and the advertising side draw
// from this one list so the dropdowns can never drift apart.

export const CONSULTING_SERVICES = [
  'Customer Support Representative (CSR)',
  'Business Development Representative (BDR)',
  'Strategic Account Manager (AM)',
  'Enterprise Account Executive (AE)',
  'Dedicated Cross-Functional Pod',
];

export const ADVERTISING_SERVICES = [
  'Google Local Services Ads (LSA)',
  'Google Ads Management',
  'Google Ads + LSA (Combined)',
  'Google Business Profile Support',
  'Local SEO / Organic Ranking',
  'Advertising Audit / Other',
];

export const SERVICE_OPTIONS = [
  ...CONSULTING_SERVICES,
  ...ADVERTISING_SERVICES,
  'Custom Advisory / Other',
];

export function isAdvertisingService(service: string): boolean {
  return ADVERTISING_SERVICES.includes(service);
}

// Consulting inquiries ask about team capacity; advertising inquiries ask
// about monthly ad budget. Both answers travel in the same `teamSize`
// field, which the server labels "Team size / scope" in the email.
export const TEAM_SIZE_OPTIONS = [
  '1 dedicated specialist',
  '2–3 specialists (Pod)',
  '4–8 specialists (Department scaling)',
  'Enterprise Custom Team (10+)',
];

export const AD_SPEND_OPTIONS = [
  'Monthly ad spend under $2,500',
  'Monthly ad spend $2,500–$10,000',
  'Monthly ad spend $10,000+',
  'Not sure yet — need guidance',
];

export function scopeOptionsFor(service: string): string[] {
  return isAdvertisingService(service) ? AD_SPEND_OPTIONS : TEAM_SIZE_OPTIONS;
}

export function scopeLabelFor(service: string): string {
  return isAdvertisingService(service) ? 'Monthly Ad Budget' : 'Target Capacity / Scope';
}

export function defaultScopeFor(service: string): string {
  return scopeOptionsFor(service)[0];
}
