import { Link } from "@/components/Link";

import { Bar } from "@/components/Bar";
import { Brand } from "@/components/Brand";
import { LangMenu } from "@/components/LangMenu";
import { LOCALE_BY_LANG, type Lang } from "@/constants/languages";
import { ANCHORS, DOC_PATHS, HOME, HOW } from "@/constants/routes";
import { getT } from "@/i18n";

type TopbarProps = {
  lang: Lang;
  alternates: Record<Lang, string>;
  onHome?: boolean;
  onBand?: boolean;
};

export function Topbar({
  lang,
  alternates,
  onHome = false,
  onBand = false,
}: TopbarProps) {
  const t = getT(LOCALE_BY_LANG[lang], "common");
  const anchors = ANCHORS[lang];

  return (
    <Bar plain={!onBand}>
      <div className="wrap">
        <Brand lang={lang} label={t("brandAria")} />

        <nav aria-label={t("topNavAria")}>
          <Link href={HOW[lang]}>{t("nav.how")}</Link>
          <Link href={`${HOME[lang]}#${anchors.pricing}`}>
            {t("nav.pricing")}
          </Link>
          <Link href={DOC_PATHS[lang].help}>{t("nav.help")}</Link>
        </nav>

        <LangMenu lang={lang} alternates={alternates} />

        <Link
          className="top-cta"
          href={onHome ? "#baixar" : `${HOME[lang]}#baixar`}
        >
          {t("nav.download")}
        </Link>
      </div>
    </Bar>
  );
}
