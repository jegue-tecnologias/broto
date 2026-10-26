import { ChevronRight } from "@/components/Icons";
import { Link } from "@/components/Link";
import type { Lang } from "@/constants/languages";
import { HOW } from "@/constants/routes";
import type { T } from "@/i18n";

export function Teaser({ t, lang }: { t: T; lang: Lang }) {
  return (
    <section className="teaser">
      <div className="wrap">
        <Link className="teaser-card" href={HOW[lang]}>
          <span className="teaser-texts">
            <span className="eyebrow">{t("teaser.eyebrow")}</span>
            <span className="teaser-title">{t("teaser.title")}</span>
            <span className="teaser-text">{t("teaser.text")}</span>
          </span>

          <span className="teaser-go">
            {t("teaser.action")}
            <ChevronRight />
          </span>
        </Link>
      </div>
    </section>
  );
}
