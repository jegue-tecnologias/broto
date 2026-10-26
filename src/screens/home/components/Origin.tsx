import type { T } from "@/i18n";
import { list } from "@/i18n";

export function Origin({ t }: { t: T }) {
  return (
    <section className="band origin">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t("origin.eyebrow")}</p>
          <h2>{t("origin.title")}</h2>
        </div>

        <div className="origin-body">
          {list<string>(t, "origin.paragraphs").map((paragraph, i) => (
            <p key={i} style={{ ["--i" as string]: i }}>
              {paragraph}
            </p>
          ))}
        </div>

        <p className="origin-quote">{t("origin.quote")}</p>
      </div>
    </section>
  );
}
