export const siteConfig = {
  name: "New",
  nameAr: "نيو",
  description: "Premium pet supplies for cats and dogs in Saudi Arabia",
  descriptionAr:
    "وجهة سعودية للمستلزمات اليومية للقطط والكلاب، نجمع لك الأطعمة والألعاب والعناية في تجربة تسوق واضحة ومريحة.",
  announcementAr: "مرحباً بكم في نيو — وجهتكم لمستلزمات أليفك في المملكة العربية السعودية",
  locale: "ar-SA",
  supportedLocales: ["ar-SA", "en-SA"] as const,
  currency: "SAR" as const,
  vatRate: 0.15,
  country: "SA",
} as const;

export type SiteConfig = typeof siteConfig;
