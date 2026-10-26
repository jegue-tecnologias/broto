import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Topbar } from "@/components/Topbar";
import { LANGS, LOCALE_BY_LANG, type Lang } from "@/constants/languages";
import { HOME } from "@/constants/routes";
import { getT } from "@/i18n";

import { Download } from "./components/Download";
import { Faq } from "./components/Faq";
import { Hero } from "./components/Hero";
import { Origin } from "./components/Origin";
import { Pricing } from "./components/Pricing";
import { Proof } from "./components/Proof";
import { Teaser } from "./components/Teaser";
import { Who } from "./components/Who";

export function HomeScreen({ lang }: { lang: Lang }) {
  const t = getT(LOCALE_BY_LANG[lang], "home");

  const alternates = Object.fromEntries(
    LANGS.map((other) => [other, HOME[other]]),
  ) as Record<Lang, string>;

  return (
    <>
      <Topbar lang={lang} alternates={alternates} onHome onBand />

      <main className="page home">
        <Hero t={t} lang={lang} />
        <Proof t={t} />

        <Reveal>
          <Origin t={t} />
        </Reveal>

        <Reveal>
          <Who t={t} />
        </Reveal>

        <Reveal>
          <Teaser t={t} lang={lang} />
        </Reveal>

        <Reveal>
          <Pricing t={t} lang={lang} />
        </Reveal>

        <Reveal>
          <Faq t={t} />
        </Reveal>

        <Reveal>
          <Download t={t} lang={lang} />
        </Reveal>
      </main>

      <Footer lang={lang} />
    </>
  );
}
