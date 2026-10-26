import type { CSSProperties } from "react";

import { Fold } from "@/components/Fold";
import { ChevronDown } from "@/components/Icons";
import { list, type T } from "@/i18n";

type Item = { q: string; a: string };

export function Faq({ t }: { t: T }) {
  return (
    <section className="faq">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t("faq.eyebrow")}</p>
          <h2>{t("faq.title")}</h2>
        </div>

        <div className="faq-list">
          {list<Item>(t, "faq.items").map((item, i) => (
            <Fold
              key={String(item.q)}
              className="faq-item"
              style={{ ["--i" as string]: i } as CSSProperties}
            >
              <summary>
                {item.q}
                <ChevronDown />
              </summary>
              <p>{item.a}</p>
            </Fold>
          ))}
        </div>
      </div>
    </section>
  );
}
