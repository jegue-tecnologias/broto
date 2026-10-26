"use client";

import { useEffect, useRef, type ReactNode } from "react";

const STILL = 220;

type BarProps = {
  plain?: boolean;
  children: ReactNode;
};

export function Bar({ plain = false, children }: BarProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let idle = 0;
    let frame = 0;

    const tone = () => {
      frame = 0;

      const stack = document.elementsFromPoint(8, node.offsetHeight + 2);
      const band = stack.some((item) => item.classList.contains("band"));

      node.classList.toggle("is-plain", !band);
    };

    const read = () => {
      node.classList.add("is-lifted");
      if (!frame) frame = requestAnimationFrame(tone);

      window.clearTimeout(idle);
      idle = window.setTimeout(() => node.classList.remove("is-lifted"), STILL);
    };

    tone();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);

    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
      window.clearTimeout(idle);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={plain ? "topbar is-plain" : "topbar"} ref={ref}>
      {children}
    </header>
  );
}
