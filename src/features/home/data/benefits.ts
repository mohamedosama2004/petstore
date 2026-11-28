export type BenefitIconKind = "package" | "selection" | "support" | "privacy";

export interface HomeBenefit {
  id: string;
  title: string;
  description: string;
  icon: BenefitIconKind;
}

export const benefits: HomeBenefit[] = [
  {
    id: "organized",
    title: "تصنيف واضح",
    description: "منتجات مرتبة في فئات سهلة التصفح لتصل إلى ما تبحث عنه بسرعة.",
    icon: "package",
  },
  {
    id: "details",
    title: "تفاصيل تساعدك",
    description: "أسماء وأوصاف وأسعار ظاهرة بوضوح لمقارنة الخيارات قبل الاختيار.",
    icon: "selection",
  },
  {
    id: "support",
    title: "تواصل متاح",
    description: "لديك استفسار؟ يمكنك الوصول إلينا عبر صفحة تواصل معنا.",
    icon: "support",
  },
  {
    id: "simple",
    title: "تجربة بسيطة",
    description: "تصميم مريح وخطوات قليلة لتصفح المنتجات وطلب ما تحتاجه.",
    icon: "privacy",
  },
];
