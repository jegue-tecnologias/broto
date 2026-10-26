import { ChevronRight } from "@/components/Icons";
import { Link } from "@/components/Link";
import { WordmarkVideo } from "@/components/WordmarkVideo";
import type { Lang } from "@/constants/languages";
import { HOW } from "@/constants/routes";
import type { T } from "@/i18n";

import { ResultScreen } from "./mock/ResultScreen";
import { Soon } from "./Soon";

export function Hero({ t, lang }: { t: T; lang: Lang }) {
  return (
    <section className="hero band is-first">
      <div className="wrap hero-grid">
        <div>
          <WordmarkVideo tone="light" className="hero-wordmark" />
          <p className="eyebrow">{t("hero.eyebrow")}</p>
          <h1>{t("hero.title")}</h1>
          <p className="lede">{t("hero.lede")}</p>

          <div className="hero-actions">
            <Link className="cta" href={HOW[lang]}>
              {t("hero.cta")}
              <ChevronRight />
            </Link>
            <Soon>{t("hero.soon")}</Soon>
          </div>

          <p className="hero-note">{t("hero.note")}</p>
        </div>

        <div className="phone">
          <ResultScreen t={t} />
        </div>
      </div>
    </section>
  );
}
