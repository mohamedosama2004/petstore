export const siteConfig = {
  name: "PetStore",
  description: "Premium pet supplies e-commerce store in Saudi Arabia",
  locale: "ar-SA",
  supportedLocales: ["ar-SA", "en-SA"] as const,
  currency: "SAR" as const,
  vatRate: 0.15,
  country: "SA",
} as const;

export type SiteConfig = typeof siteConfig;
