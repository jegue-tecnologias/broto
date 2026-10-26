import { Clock, Drop, Sprout } from "@/components/Icons";
import { list, type T } from "@/i18n";

type Person = { title: string; text: string };

const ICONS = [Sprout, Drop, Clock];

export function Who({ t }: { t: T }) {
  return (
    <section className="who">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t("who.eyebrow")}</p>
          <h2>{t("who.title")}</h2>
          <p>{t("who.lede")}</p>
        </div>

        <div className="whos">
          {list<Person>(t, "who.items").map((item, i) => {
            const Icon = ICONS[i] ?? Sprout;

            return (
            <div
              key={String(item.title)}
              className="who-card"
              style={{ ["--i" as string]: i }}
            >
              <span className="who-icon">
                <Icon />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            );
          })}
        </div>

        <p className="who-note">{t("who.note")}</p>
      </div>
    </section>
  );
}
