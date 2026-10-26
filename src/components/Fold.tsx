"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

const SPEED = 260;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

type FoldProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Fold({ className, style, children }: FoldProps) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const summary = node.querySelector("summary");
    if (!summary) return;

    const quiet = window.matchMedia("(prefers-reduced-motion: reduce)");
    let run: Animation | null = null;

    const frame = () => {
      const cs = getComputedStyle(node);

      return (
        parseFloat(cs.borderTopWidth) +
        parseFloat(cs.borderBottomWidth) +
        parseFloat(cs.paddingTop) +
        parseFloat(cs.paddingBottom)
      );
    };

    const play = (from: number, to: number, after?: () => void) => {
      run?.cancel();
      node.style.overflow = "hidden";

      run = node.animate([{ height: `${from}px` }, { height: `${to}px` }], {
        duration: SPEED,
        easing: EASE,
      });

      run.onfinish = () => {
        run = null;
        node.style.overflow = "";
        after?.();
      };
    };

    const onClick = (event: MouseEvent) => {
      if (quiet.matches) return;

      event.preventDefault();

      const from = node.offsetHeight;

      if (node.open) {
        play(from, summary.offsetHeight + frame(), () => {
          node.open = false;
        });
        return;
      }

      node.open = true;
      play(from, node.offsetHeight);
    };

    summary.addEventListener("click", onClick);

    return () => {
      summary.removeEventListener("click", onClick);
      run?.cancel();
    };
  }, []);

  return (
    <details className={className} style={style} ref={ref}>
      {children}
    </details>
  );
}
