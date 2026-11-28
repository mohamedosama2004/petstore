import {
  BestSellersSection,
  CategorySection,
  HeroSection,
  HomeAnimations,
  NewsletterSection,
  PromotionalBanner,
  WhyChooseUs,
} from "@/features/home";

export default function HomePage() {
  return (
    <HomeAnimations>
      <HeroSection />
      <CategorySection />
      <BestSellersSection />
      <PromotionalBanner />
      <WhyChooseUs />
      <NewsletterSection />
    </HomeAnimations>
  );
}
