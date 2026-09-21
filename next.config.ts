import type { NextConfig } from "next";
import path from "path";

const nimbus = (p: string) => path.join(process.cwd(), "src", "nimbus", p);

const nextConfig: NextConfig = {
  // Deployed on Vercel: no static export / basePath needed.
  turbopack: {
    root: path.join(process.cwd()),
    rules: {
      // Legacy Nimbus icons import `{ ReactComponent }` from .svg files.
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: { exportType: "named", namedExport: "ReactComponent", icon: false, svgo: false },
          },
        ],
        as: "*.js",
      },
    },
  },
  sassOptions: {
    // Nimbus SCSS does `@use 'tokens'` / `@use 'mixins'` (Storybook's includePaths).
    loadPaths: [nimbus("styles/tokens"), nimbus("styles/mixins")],
    silenceDeprecations: ["import", "global-builtin", "legacy-js-api", "color-functions"],
  },
};

export default nextConfig;
