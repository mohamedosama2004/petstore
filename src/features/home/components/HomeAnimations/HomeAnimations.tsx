"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/hooks";

type Q = (selector: string) => Element[];

interface Layout {
  /** < 640px */
  phone: boolean;
  /** < 1024px (phone + tablet) */
  compact: boolean;
  /** Horizontal travel for alternating entrances, in px. */
  distance: number;
}

const NO_MOTION_PREF = "(prefers-reduced-motion: no-preference)";

/* -------------------------------------------------------------------------- */
/*  Hero: one-time entrance timeline, idle float, and scroll parallax          */
/* -------------------------------------------------------------------------- */

function animateHero(q: Q, { compact, phone }: Layout) {
  const section = q("[data-hero-section]")[0];
  const visual = q("[data-hero-visual]");
  const frame = q("[data-hero-frame]");
  const floats = q("[data-hero-float]");

  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

  intro
    .from(q("[data-hero-badge]"), { y: 14, opacity: 0, duration: 0.6 })
    .from(q("[data-hero-headline]"), { y: compact ? 26 : 44, opacity: 0, duration: 0.9 }, "-=0.35")
    .from(q("[data-hero-desc]"), { y: 20, opacity: 0, duration: 0.7 }, "-=0.55")
    .from(q("[data-hero-cta]"), { y: 16, opacity: 0, duration: 0.55, stagger: 0.1 }, "-=0.45")
    .fromTo(
      visual,
      { opacity: 0, x: compact ? 0 : -70, y: compact ? 24 : 0, scale: 0.94 },
      { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.1, ease: "power3.inOut" },
      0.15,
    )
    .fromTo(
      frame,
      { clipPath: "inset(10% 10% 10% 10% round 40px)" },
      {
        clipPath: "inset(0% 0% 0% 0% round 40px)",
        duration: 1.1,
        ease: "power3.inOut",
        clearProps: "clipPath",
      },
      0.15,
    )
    .fromTo(
      floats,
      { opacity: 0, scale: 0.6 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)", stagger: 0.12 },
      "-=0.5",
    );

  // Idle float. Only `y` and `rotation` are animated, the entrance owns `scale`/`opacity`.
  floats.forEach((el, i) => {
    gsap.to(el, {
      y: (i % 2 === 0 ? -1 : 1) * (phone ? 5 : 9),
      rotation: (i % 2 === 0 ? 1 : -1) * 2,
      duration: 2.6 + i * 0.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: i * 0.3,
    });
  });

  // Scroll parallax: the visual drifts up, blobs drift at their own speeds.
  const parallax = { trigger: section, start: 0, end: "bottom top", scrub: true };

  gsap.to(visual, { y: compact ? -22 : -64, ease: "none", scrollTrigger: parallax });
  q("[data-hero-blob]").forEach((blob, i) => {
    gsap.to(blob, {
      y: (i === 0 ? 1 : -1) * (compact ? 30 : 80),
      x: (i === 0 ? -1 : 1) * (compact ? 10 : 30),
      ease: "none",
      scrollTrigger: parallax,
    });
  });
}

/* -------------------------------------------------------------------------- */
/*  Generic scrubbed reveals                                                   */
/* -------------------------------------------------------------------------- */

function scrubHeadings(q: Q, { compact }: Layout) {
  q("[data-section-heading]").forEach((el) => {
    gsap.fromTo(
      el,
      { y: compact ? 22 : 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 92%", end: "top 66%", scrub: 0.5 },
      },
    );
  });
}

/**
 * One scrubbed timeline per grid item. Items start at slightly different
 * scroll offsets based on their column, so cards in the same row overlap and
 * stagger as the user scrolls. Direction alternates by index.
 */
function scrubGrid(
  items: Element[],
  columns: number,
  build: (tl: gsap.core.Timeline, el: Element, dir: 1 | -1, index: number) => void,
) {
  items.forEach((el, i) => {
    const column = i % columns;
    const dir: 1 | -1 = i % 2 === 0 ? 1 : -1;
    const start = 96 - column * 5;

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: el,
        start: `top ${start}%`,
        end: `top ${start - 30}%`,
        scrub: 0.6,
      },
    });

    build(tl, el, dir, i);
  });
}

/* -------------------------------------------------------------------------- */
/*  Categories                                                                 */
/* -------------------------------------------------------------------------- */

function animateCategories(q: Q, layout: Layout, columns: number) {
  const { distance, compact } = layout;

  scrubGrid(q("[data-category-card]"), columns, (tl, el, dir) => {
    const art = el.querySelector("[data-category-art]");

    tl.fromTo(
      el,
      { x: dir * distance, y: dir * 18, rotation: dir * (compact ? 3 : 5), scale: 0.9, opacity: 0 },
      { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1 },
    );

    // Adjacent cards' artwork counter-rotates and slides the opposite way.
    if (art) {
      tl.fromTo(art, { x: -dir * 20, rotation: -dir * 16 }, { x: 0, rotation: 0, duration: 1 }, 0);

      // Continuous weave while the card travels through the viewport (alternating).
      gsap.fromTo(
        art,
        { y: dir * (compact ? 8 : 14) },
        {
          y: dir * (compact ? -8 : -14),
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
        },
      );
    }
  });
}

/* -------------------------------------------------------------------------- */
/*  Featured products                                                          */
/* -------------------------------------------------------------------------- */

function animateProducts(q: Q, layout: Layout, columns: number) {
  const { distance, compact } = layout;

  scrubGrid(q("[data-product-item]"), columns, (tl, el, dir) => {
    const media = el.querySelector("[data-product-media]");
    const slot = media?.querySelector("[data-image-slot]");

    tl.fromTo(
      el,
      { x: dir * distance * 0.8, rotation: dir * (compact ? 1.5 : 2.5), scale: 0.92, opacity: 0 },
      { x: 0, rotation: 0, scale: 1, opacity: 1, duration: 1 },
    );

    if (media) {
      tl.fromTo(
        media,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.inOut", duration: 0.9 },
        0.15,
      );
    }
    if (slot) {
      tl.fromTo(slot, { scale: 1.22 }, { scale: 1, ease: "power2.out", duration: 1 }, 0.1);
    }
  });
}

/* -------------------------------------------------------------------------- */
/*  Promo: scrubbed swap, pinned on desktop                                    */
/* -------------------------------------------------------------------------- */

function animatePromo(q: Q, layout: Layout, pinned: boolean) {
  const panel = q("[data-promo-panel]")[0];
  const content = q("[data-promo-content]");
  const visual = q("[data-promo-visual]");
  const orbs = q("[data-promo-orb]");
  const art = q("[data-promo-visual] [data-image-slot] > *");

  if (!panel) return;

  const travel = layout.compact ? 36 : 120;

  // Phase 1: content and visual arrive from opposite sides, layered.
  // Uses x / scale / opacity only; the pinned phase below uses xPercent / rotation.
  gsap
    .timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: { trigger: panel, start: "top 90%", end: "top 50%", scrub: 0.7 },
    })
    .fromTo(content, { x: travel, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, 0)
    .fromTo(visual, { x: -travel, scale: 0.84, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 1 }, 0);

  if (pinned) {
    // Phase 2: the one pinned showcase. While the panel is held, the visual
    // slides across the gap and tilts, the copy yields slightly, the artwork
    // parallaxes inside its frame and the background orbs travel apart.
    gsap
      .timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: panel,
          start: "center center",
          end: () => `+=${Math.round(window.innerHeight * 0.7)}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
      .fromTo(visual, { xPercent: 0, rotation: -3 }, { xPercent: 12, rotation: 3, duration: 1 }, 0)
      .fromTo(content, { xPercent: 0 }, { xPercent: -4, duration: 1 }, 0)
      .fromTo(art, { scale: 1.08, yPercent: -5 }, { scale: 1.08, yPercent: 5, duration: 1 }, 0)
      .to(orbs[0] ?? [], { x: -150, y: 90, scale: 1.5, duration: 1 }, 0)
      .to(orbs[1] ?? [], { x: 160, y: -90, scale: 1.4, duration: 1 }, 0);
  } else {
    // No pinning on tablet/phone: keep the artwork parallax tied to scroll.
    gsap.fromTo(
      art,
      { scale: 1.08, yPercent: -4 },
      {
        scale: 1.08,
        yPercent: 4,
        ease: "none",
        scrollTrigger: { trigger: panel, start: "top bottom", end: "bottom top", scrub: 1 },
      },
    );
    orbs.forEach((orb, i) => {
      gsap.fromTo(
        orb,
        { y: i === 0 ? -30 : 30 },
        {
          y: i === 0 ? 30 : -30,
          ease: "none",
          scrollTrigger: { trigger: panel, start: "top bottom", end: "bottom top", scrub: 1 },
        },
      );
    });
  }
}

/* -------------------------------------------------------------------------- */
/*  Benefits                                                                   */
/* -------------------------------------------------------------------------- */

function animateBenefits(q: Q, layout: Layout, columns: number) {
  const { distance } = layout;

  scrubGrid(q("[data-benefit-item]"), columns, (tl, el, dir) => {
    tl.fromTo(
      el,
      { x: dir * distance * 0.7, y: 26, scale: 0.9, opacity: 0 },
      { x: 0, y: 0, scale: 1, opacity: 1, duration: 1 },
    );
  });
}

/* -------------------------------------------------------------------------- */
/*  Setup                                                                      */
/* -------------------------------------------------------------------------- */

function animateHome(root: Element) {
  gsap.registerPlugin(ScrollTrigger);

  const q = gsap.utils.selector(root) as Q;
  const mm = gsap.matchMedia(root);

  mm.add(
    {
      phone: `(max-width: 639px) and ${NO_MOTION_PREF}`,
      tablet: `(min-width: 640px) and (max-width: 1023px) and ${NO_MOTION_PREF}`,
      desktop: `(min-width: 1024px) and ${NO_MOTION_PREF}`,
      tall: "(min-height: 640px)",
    },
    (context) => {
      const { phone, tablet, desktop, tall } = context.conditions as unknown as Record<
        "phone" | "tablet" | "desktop" | "tall",
        boolean
      >;

      const layout: Layout = {
        phone,
        compact: phone || tablet,
        distance: desktop ? 90 : phone ? 26 : 48,
      };

      animateHero(q, layout);
      scrubHeadings(q, layout);
      animateCategories(q, layout, desktop ? 5 : phone ? 2 : 3);
      animateProducts(q, layout, desktop ? 3 : 2);
      animatePromo(q, layout, desktop && tall);
      animateBenefits(q, layout, desktop ? 4 : phone ? 1 : 2);
    },
  );

  // Keep trigger positions correct after fonts / images / layout settle.
  let disposed = false;
  let frame = 0;
  let lastHeight = (root as HTMLElement).offsetHeight;

  const refresh = () => {
    if (!disposed) ScrollTrigger.refresh();
  };

  if (document.fonts?.ready) void document.fonts.ready.then(refresh);
  if (document.readyState !== "complete") {
    window.addEventListener("load", refresh, { once: true });
  }

  const observer = new ResizeObserver(() => {
    const height = (root as HTMLElement).offsetHeight;
    if (Math.abs(height - lastHeight) < 2) return;
    lastHeight = height;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(refresh);
  });
  observer.observe(root);

  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    window.removeEventListener("load", refresh);
    mm.revert();
  };
}

export interface HomeAnimationsProps {
  children: ReactNode;
}

export function HomeAnimations({ children }: HomeAnimationsProps) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGsap(scopeRef, animateHome);

  // `overflow-x-clip` stops horizontal travel from creating a scrollbar without
  // becoming a scroll container (which would break pinning).
  return (
    <div ref={scopeRef} className="overflow-x-clip">
      {children}
    </div>
  );
}
