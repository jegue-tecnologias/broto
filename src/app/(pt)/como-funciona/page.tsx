import type { Metadata } from "next";

import { HowScreen } from "@/screens/how";
import { howMetadata } from "@/screens/how/metadata";

export const metadata: Metadata = howMetadata("pt");

export default function Page() {
  return <HowScreen lang="pt" />;
}
