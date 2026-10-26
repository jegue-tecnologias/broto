"use client";

import { useEffect, useRef, type ReactNode } from "react";

const LEAVE = 140;

export function HoverMenu({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    let timer = 0;

    const enter = () => {
      window.clearTimeout(timer);
      node.open = true;
    };

    const leave = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        node.open = false;
      }, LEAVE);
    };

    node.addEventListener("pointerenter", enter);
    node.addEventListener("pointerleave", leave);

    return () => {
      window.clearTimeout(timer);
      node.removeEventListener("pointerenter", enter);
      node.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <details className="langs" ref={ref}>
      {children}
    </details>
  );
}
