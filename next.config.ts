import type { NextConfig } from "next";
import path from "path";

// Set NEXT_BASE_PATH to "/<repo-name>" once this site lives at
// https://<org>.github.io/<repo-name>/ (a GitHub Pages *project* site).
// Leave unset for a custom domain or a user/org root site.
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(process.cwd()),
  },
};

export default nextConfig;
