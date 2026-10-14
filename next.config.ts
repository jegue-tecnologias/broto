import type { NextConfig } from "next";

import { BASE_PATH } from "./src/constants/site";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
