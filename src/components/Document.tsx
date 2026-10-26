import type { ReactNode } from "react";

import { Anchors } from "@/components/Anchors";

import { HTML_LANG, type Lang } from "@/constants/languages";
import { fontClass } from "@/style/fonts";

import "@/style/globals.css";

const BOOT = [
  "document.documentElement.classList.add('js');",
  "var h=location.hash.slice(1);",
  "if(h){",
  "document.documentElement.dataset.hash=h;",
  "history.replaceState(history.state,'',location.pathname+location.search);",
  "}",
].join("");

type DocumentProps = {
  lang: Lang;
  children: ReactNode;
};

export function Document({ lang, children }: DocumentProps) {
  return (
    <html lang={HTML_LANG[lang]} className={fontClass} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: BOOT,
          }}
        />
        {children}

        <Anchors />
      </body>
    </html>
  );
}
