"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const trim = (path: string) => path.replace(/\/+$/, "") || "/";

export function Anchors() {
  const path = usePathname();

  useEffect(() => {
    const go = (id: string) => {
      const target = document.getElementById(id);
      if (!target) return false;

      const quiet = window.matchMedia("(prefers-reduced-motion: reduce)");
      target.scrollIntoView({
        behavior: quiet.matches ? "auto" : "smooth",
        block: "start",
      });

      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }

      target.focus({ preventScroll: true });

      return true;
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const node = event.target;
      const link = node instanceof Element ? node.closest("a") : null;
      if (!link || link.target === "_blank") return;

      const url = new URL(link.href, window.location.href);

      if (url.origin !== window.location.origin) return;
      if (trim(url.pathname) !== trim(window.location.pathname)) return;
      if (url.hash.length < 2) return;

      if (!go(decodeURIComponent(url.hash.slice(1)))) return;

      event.preventDefault();
      event.stopPropagation();
    };

    const onHash = () => {
      if (window.location.hash.length < 2) return;

      const id = decodeURIComponent(window.location.hash.slice(1));

      window.history.replaceState(
        window.history.state,
        "",
        window.location.pathname + window.location.search,
      );

      go(id);
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", onHash);

    const root = document.documentElement;
    const stash = root.dataset.hash;

    if (stash) {
      delete root.dataset.hash;
      requestAnimationFrame(() => go(decodeURIComponent(stash)));
    } else if (window.location.hash.length > 1) {
      const id = decodeURIComponent(window.location.hash.slice(1));

      window.history.replaceState(
        window.history.state,
        "",
        window.location.pathname + window.location.search,
      );

      requestAnimationFrame(() => go(id));
    }

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHash);
    };
  }, [path]);

  return null;
}
