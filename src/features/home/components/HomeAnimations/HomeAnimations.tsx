"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks";

function animateHome() {
  gsap.registerPlugin(ScrollTrigger);

  const mobile = window.matchMedia("(max-width: 767px)").matches;
  const distance = mobile ? 18 : 34;
  const duration = mobile ? 0.5 : 0.8;
  const stagger = mobile ? 0.06 : 0.1;

  const hero = gsap.timeline({ defaults: { ease: "power3.out" } });

  hero
    .from("[data-hero-headline]", {
      y: distance,
      opacity: 0,
      duration,
    })
    .from(
      "[data-hero-desc]",
      { y: distance * 0.7, opacity: 0, duration: duration * 0.85 },
      `-=${mobile ? 0.18 : 0.32}`,
    )
    .from(
      "[data-hero-cta]",
      {
        y: mobile ? 10 : 16,
        opacity: 0,
        duration: duration * 0.65,
        stagger,
      },
      `-=${mobile ? 0.12 : 0.22}`,
    )
    .from(
      "[data-hero-visual]",
      {
        scale: mobile ? 0.98 : 0.95,
        opacity: 0,
        duration: duration * 1.1,
      },
      `-=${mobile ? 0.16 : 0.46}`,
    )
    .from(
      "[data-hero-float]",
      {
        y: mobile ? 8 : 14,
        opacity: 0,
        duration: duration * 0.55,
        stagger: mobile ? 0.04 : 0.09,
      },
      `-=${mobile ? 0.08 : 0.36}`,
    );

  const scrollReveal = (
    targets: string,
    trigger: string,
    vars: gsap.TweenVars,
    start = "top 84%",
  ) => {
    gsap.from(targets, {
      opacity: 0,
      ...vars,
      scrollTrigger: {
        trigger,
        start,
        once: true,
      },
    });
  };

  scrollReveal(
    "[data-category-section] [data-section-heading]",
    "[data-category-section]",
    { y: distance, duration },
  );
  scrollReveal(
    "[data-category-card]",
    "[data-category-grid]",
    { y: distance, duration: duration * 0.75, stagger },
  );

  scrollReveal(
    "[data-products-section] [data-section-heading]",
    "[data-products-section]",
    { y: distance, duration },
  );
  scrollReveal(
    "[data-product-card]",
    "[data-product-grid]",
    { y: distance * 1.1, duration: duration * 0.75, stagger: mobile ? 0.04 : 0.07 },
  );

  scrollReveal(
    "[data-promo-content]",
    "[data-promo-panel]",
    { y: distance, duration: duration * 1.05, stagger: mobile ? 0.06 : 0.12 },
  );
  scrollReveal(
    "[data-promo-visual]",
    "[data-promo-panel]",
    {
      scale: mobile ? 0.98 : 0.94,
      duration: duration * 0.9,
    },
    "top 78%",
  );

  scrollReveal(
    "[data-benefits-section] [data-section-heading]",
    "[data-benefits-section]",
    { y: distance, duration },
  );
  scrollReveal(
    "[data-benefit-card]",
    "[data-benefit-grid]",
    { y: distance, duration: duration * 0.75, stagger },
  );
}

export interface HomeAnimationsProps {
  children: ReactNode;
}

export function HomeAnimations({ children }: HomeAnimationsProps) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGsap(scopeRef, animateHome);

  return <div ref={scopeRef}>{children}</div>;
}
