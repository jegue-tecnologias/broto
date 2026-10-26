import { Footer } from "@/components/Footer";
import { Link } from "@/components/Link";
import { WordmarkVideo } from "@/components/WordmarkVideo";
import { ResultScreen } from "@/screens/home/components/mock/ResultScreen";
import { Reveal } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { LANGS, LOCALE_BY_LANG, type Lang } from "@/constants/languages";
import { ANCHORS, HOW } from "@/constants/routes";
import { getT, list } from "@/i18n";

import { BrotinhoSection } from "@/screens/home/components/BrotinhoSection";
import { Download } from "@/screens/home/components/Download";
import { HowItWorks } from "@/screens/home/components/HowItWorks";
import { Pricing } from "@/screens/home/components/Pricing";
import { Reminders } from "@/screens/home/components/Reminders";
import { WhyOrdered } from "@/screens/home/components/WhyOrdered";

export function HowScreen({ lang }: { lang: Lang }) {
  const t = getT(LOCALE_BY_LANG[lang], "home");

  const index = list<string>(t, "how.index").map((label, i) => ({
    label,
    id: [ANCHORS[lang].how, "diagnostico", "lembretes", "brotinho"][i],
  }));

  const alternates = Object.fromEntries(
    LANGS.map((other) => [other, HOW[other]]),
  ) as Record<Lang, string>;

  return (
    <>
      <Topbar lang={lang} alternates={alternates} onBand />

      <main className="page home">
        <section className="band how-head is-first">
          <div className="wrap hero-grid">
            <div>
              <WordmarkVideo tone="light" className="how-wordmark" />

              <p className="eyebrow">{t("how.pageEyebrow")}</p>
              <h1>{t("how.pageTitle")}</h1>
              <p className="lede">{t("how.pageLede")}</p>

              <nav className="how-index" aria-label={t("how.indexAria")}>
                {index.map((item, i) => (
                  <Link key={item.id} href={"#" + item.id}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="phone">
              <ResultScreen t={t} />
            </div>
          </div>
        </section>

        <Reveal>
          <HowItWorks t={t} lang={lang} />
        </Reveal>

        <Reveal>
          <WhyOrdered t={t} />
        </Reveal>

        <Reveal>
          <Reminders t={t} />
        </Reveal>

        <Reveal>
          <BrotinhoSection t={t} />
        </Reveal>

        <Reveal>
          <Pricing t={t} lang={lang} />
        </Reveal>

        <Reveal>
          <Download t={t} lang={lang} />
        </Reveal>
      </main>

      <Footer lang={lang} />
    </>
  );
}
