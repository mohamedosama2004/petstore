"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";

export function useGsap(scope: RefObject<Element | null>, setup: () => void) {
  useEffect(() => {
    const target = scope.current;

    if (!target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(setup, target);

    return () => {
      context.revert();
    };
  }, [scope, setup]);
}
