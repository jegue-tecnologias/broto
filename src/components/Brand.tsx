import { Link } from "@/components/Link";

import { Wordmark } from "@/components/Wordmark";
import type { Lang } from "@/constants/languages";
import { HOME } from "@/constants/routes";

type BrandProps = {
  lang: Lang;
  label: string;
};

export function Brand({ lang, label }: BrandProps) {
  return (
    <Link className="brand" href={HOME[lang]} aria-label={label}>
      <Wordmark tone="light" />
    </Link>
  );
}
