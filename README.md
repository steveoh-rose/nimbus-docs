# nimbus-docs

Documentation site for the Nimbus design system, built with Next.js, Tailwind and shadcn/ui,
styled with the Nimbus design tokens and using the Nimbus asset icons for its own UI.

It documents:

- **Tokens** from `cc-design-tokens`: colors, typography, spacing, shadows
- **Core components** from `nimbus-ui/src/core`: live previews, source and prop tables, generated
  from the same Storybook stories and MDX pages
- **Icons** from `nimbus-assets`: searchable app and brand icon sets
- **Getting started** guides from the nimbus-ui README and Storybook docs

## How it works

The three source repos are private, so their source is **vendored** into this repo and the site builds
anywhere (Vercel included) without access to them.

```
nimbus-ui/src/{core,utils,styles,icons,docs}  ->  src/nimbus/
nimbus-assets/icons                            ->  src/nimbus/assets/icons
cc-design-tokens/{tokens,build}                ->  src/nimbus/tokens
```

`npm run sync` (`scripts/sync-nimbus.mjs`) copies them, rewrites Storybook/webpack-only imports
(`@/`, `~` Sass imports) so they compile under Next, and generates `src/generated/`
(story manifest, prop tables). The source repos are only read, never modified.

Pages are generated from that source:

| Route | Source |
| --- | --- |
| `/docs/components/[name]` | each component's `*.mdx` + `*.stories.tsx` (Storybook doc blocks are mapped onto site components) |
| `/docs/tokens/[name]` | `cc-design-tokens` built CSS variables + shadow tokens |
| `/docs/icons/[set]` | `nimbus-assets` icon components |
| `/docs/introduction` etc. | nimbus-ui README / CONTRIBUTING / docs pages |

Live previews run the real Nimbus components. Example code is read from the story source, and the
Controls under a preview map Storybook `argTypes` onto small form controls.

## Develop

```bash
npm install
npm run dev
```

Update from local checkouts of the source repos (expected as siblings of this repo, with tokens and
icons already built via their `npm run build`):

```bash
npm run sync
# or point at other locations
NIMBUS_UI_PATH=... NIMBUS_TOKENS_PATH=... NIMBUS_ASSETS_PATH=... npm run sync
```

`src/nimbus/SOURCE.json` records which versions and commits were synced. See
[docs/keeping-docs-in-sync.md](docs/keeping-docs-in-sync.md) for the automated sync workflow.

## Deploy on Vercel

Import the repo in Vercel: the Next.js preset works with no configuration (Node 22, `npm run build`).
Every push to `main`, including the automated sync commits, triggers a deployment.

## Notes

- Nimbus is light-only, so there is no dark mode; previews always render on a white surface.
- Nimbus core components are pinned to the same versions as nimbus-ui (`react-aria`, `react-aria-components`,
  `react-stately`, ...). Keep them in step when nimbus-ui upgrades.
- Legacy components in `nimbus-ui/src/components` are not documented, only `core`.
