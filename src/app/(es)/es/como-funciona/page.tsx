import type { Metadata } from "next";

import { HowScreen } from "@/screens/how";
import { howMetadata } from "@/screens/how/metadata";

export const metadata: Metadata = howMetadata("es");

export default function Page() {
  return <HowScreen lang="es" />;
}
