"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";

/**
 * Runs `setup` inside a `gsap.context()` scoped to `scope`.
 *
 * `setup` receives the scope element and may return a cleanup function (for
 * `gsap.matchMedia()` instances, observers, listeners). Everything created in
 * the context is reverted, and the cleanup is called, on unmount.
 * Nothing runs when the user prefers reduced motion.
 */
export function useGsap(
  scope: RefObject<Element | null>,
  setup: (scope: Element) => void | (() => void),
) {
  useEffect(() => {
    const target = scope.current;

    if (!target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cleanup: void | (() => void);
    const context = gsap.context(() => {
      cleanup = setup(target);
    }, target);

    return () => {
      if (typeof cleanup === "function") cleanup();
      context.revert();
    };
  }, [scope, setup]);
}
