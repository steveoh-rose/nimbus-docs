#!/usr/bin/env node
/**
 * Vendors Nimbus source into this repo so the docs site builds anywhere
 * (e.g. Vercel) without access to the private sibling repos.
 *
 *   nimbus-ui        -> src/nimbus/{core,utils,styles,icons,docs}
 *   nimbus-assets    -> src/nimbus/assets/icons
 *   cc-design-tokens -> src/nimbus/tokens
 *
 * Usage:  npm run sync            (expects sibling checkouts)
 *         NIMBUS_UI_PATH=... NIMBUS_TOKENS_PATH=... NIMBUS_ASSETS_PATH=... npm run sync
 *
 * Nothing in the source repos is modified; they are only read.
 */
import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const uiRepo = path.resolve(root, process.env.NIMBUS_UI_PATH ?? "../nimbus-ui")
const tokensRepo = path.resolve(root, process.env.NIMBUS_TOKENS_PATH ?? "../cc-design-tokens")
const assetsRepo = path.resolve(root, process.env.NIMBUS_ASSETS_PATH ?? "../nimbus-assets")
const dest = path.join(root, "src", "nimbus")

for (const [name, p] of Object.entries({ uiRepo, tokensRepo, assetsRepo })) {
  if (!fs.existsSync(p)) {
    console.error(`Missing ${name} at ${p}. Set NIMBUS_*_PATH env vars.`)
    process.exit(1)
  }
}

const TEXT_EXT = new Set([".ts", ".tsx", ".js", ".mdx", ".md", ".scss", ".css", ".json"])
const tokenScss = path.join(dest, "tokens", "build", "scss", "_variables.scss")

function skip(rel) {
  return (
    rel.includes("__tests__") ||
    /\.test\.(ts|tsx)$/.test(rel) ||
    rel.endsWith("setupTests.ts") ||
    // legacy icon storybook files aren't part of the docs
    /^icons[\\/].*index\.stories\.tsx$/.test(rel)
  )
}

function transform(file, text) {
  if (/\.(mdx|md)$/.test(file)) return text
  let out = text
    .replace(/from '@\//g, "from '@nimbus/")
    .replace(/import\('@\//g, "import('@nimbus/")
    .replaceAll("@console/nimbus-assets/icons/", "@nimbus/assets/icons/")
    .replaceAll("'@console/cc-design-tokens'", "'@nimbus/tokens/build/js/_variables'")
  if (file.endsWith(".scss")) {
    out = out.replace(
      /(?:~|node_modules\/)@console\/cc-design-tokens\/build\/scss\/_?variables(\.scss)?/g,
      () => {
        let rel = path.relative(path.dirname(file), tokenScss).replaceAll("\\", "/")
        if (!rel.startsWith(".")) rel = `./${rel}`
        return rel
      }
    )
    out = out.replace(/@import 'src\/(utils\/_?mixins)'/g, (_m, target) => {
      let rel = path.relative(path.dirname(file), path.join(dest, target)).replaceAll("\\", "/")
      if (!rel.startsWith(".")) rel = `./${rel}`
      return `@import '${rel}'`
    })
  }
  // Vendored source is type-checked upstream in nimbus-ui (against its own lockfile);
  // here it only needs to build, so keep tsc focused on this repo's own code.
  if (/\.(ts|tsx)$/.test(file) && !file.endsWith(".d.ts")) out = `// @ts-nocheck
${out}`
  return out
}

function copyTree(from, to, relBase = from) {
  fs.mkdirSync(to, { recursive: true })
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name)
    const rel = path.relative(relBase, src)
    if (skip(rel)) continue
    const out = path.join(to, entry.name)
    if (entry.isDirectory()) copyTree(src, out, relBase)
    else if (TEXT_EXT.has(path.extname(entry.name))) {
      fs.writeFileSync(out, transform(out, fs.readFileSync(src, "utf8")))
    } else fs.copyFileSync(src, out)
  }
}

function git(repo, cmd) {
  try {
    return execSync(`git -C "${repo}" ${cmd}`, { encoding: "utf8" }).trim()
  } catch {
    return null
  }
}
const pkgVersion = (repo) => JSON.parse(fs.readFileSync(path.join(repo, "package.json"), "utf8")).version

fs.rmSync(dest, { recursive: true, force: true })
fs.mkdirSync(dest, { recursive: true })

// tokens first: SCSS rewrites point at them
copyTree(path.join(tokensRepo, "tokens"), path.join(dest, "tokens", "source"))
copyTree(path.join(tokensRepo, "build", "scss"), path.join(dest, "tokens", "build", "scss"))
copyTree(path.join(tokensRepo, "build", "css"), path.join(dest, "tokens", "build", "css"))
copyTree(path.join(tokensRepo, "build", "js"), path.join(dest, "tokens", "build", "js"))

const uiSrc = path.join(uiRepo, "src")
for (const dir of ["core", "utils", "styles", "icons"]) {
  copyTree(path.join(uiSrc, dir), path.join(dest, dir), uiSrc)
}
fs.writeFileSync(path.join(dest, "_variables.scss"), transform(path.join(dest, "_variables.scss"), fs.readFileSync(path.join(uiSrc, "_variables.scss"), "utf8")))
copyTree(path.join(uiSrc, "docs", "pages"), path.join(dest, "docs", "pages"))
fs.copyFileSync(path.join(uiRepo, "README.md"), path.join(dest, "docs", "README.md"))
fs.copyFileSync(path.join(uiRepo, "CONTRIBUTING.md"), path.join(dest, "docs", "CONTRIBUTING.md"))
fs.mkdirSync(path.join(dest, "docs", "assets"), { recursive: true })
for (const f of fs.readdirSync(path.join(uiSrc, "docs", "assets"))) {
  fs.copyFileSync(path.join(uiSrc, "docs", "assets", f), path.join(dest, "docs", "assets", f))
}

// Small, targeted source patches to keep vendored Nimbus components working under this site's
// toolchain (React 19 / Next 16) without touching nimbus-ui itself. Each is checked against the
// text it expects, so an upstream change fails loudly (a console warning) instead of silently
// no-op'ing.
function applyPatches(patches) {
  for (const [rel, from, to] of patches) {
    const file = path.join(dest, rel)
    // nimbus-ui ships CRLF; normalize to \n so multi-line patch strings (written as \n) match.
    const text = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n")
    const found = typeof from === "string" ? text.includes(from) : from.test(text)
    if (!found) {
      console.warn(`WARNING: patch did not apply to ${rel}. Check whether upstream changed.`)
      continue
    }
    fs.writeFileSync(file, text.replace(from, to))
  }
}

// React 19 ignores `Component.defaultProps` on function components, which nimbus-ui still
// relies on. Apply those defaults as destructuring defaults instead.
applyPatches([
  ["core/Spinner/Spinner.tsx", /\(\{ size, onDark,/, "({ size = 'sm', onDark,"],
  ["core/Switch/Switch.tsx", /(\s)size,(\r?\n\s+selected,)/, "$1size = 'sm',$2"],
  ["core/TextArea/TextArea.tsx", /required, fullWidth, resize \}/, "required, fullWidth, resize = 'vertical' }"],
])

// Overlay triggers (Popover, Modal, Menu) don't open under React 19. Two compounding causes:
//
// 1. Button.tsx spreads `{...rest}` (which may carry a handler injected by a wrapping trigger)
//    BEFORE `{...mergeProps(linkOrButtonProps, hoverProps, focusProps)}`. Plain JSX spread
//    overwrites same-named keys rather than combining them, so Button's own (no-op) handler
//    silently clobbers the trigger's. Routing `rest` through `mergeProps` combines both.
// 2. react-aria-components' PressResponder (used by DialogTrigger/MenuTrigger) doesn't recognise
//    Nimbus's custom Button as "pressable" unless the trigger element is wrapped in <Pressable>
//    (logged as "A PressResponder was rendered without a pressable child" in dev).
//
// Confirmed with a production build, not just dev mode. If a newer nimbus-ui fixes this
// upstream, `applyPatches` will warn here instead of silently no-op'ing — re-check before
// dropping these.
applyPatches([
  ["core/Button/Button.tsx", "    <Element\n      {...rest}\n      className=", "    <Element\n      className="],
  [
    "core/Button/Button.tsx",
    "{...mergeProps(linkOrButtonProps, hoverProps, focusProps)}",
    "{...mergeProps(rest, linkOrButtonProps, hoverProps, focusProps)}",
  ],
  [
    "core/Popover/Popover.tsx",
    "import {\n  DialogTrigger as ReactAriaDialogTrigger,\n  OverlayArrow,\n  Popover as ReactAriaPopover,\n} from 'react-aria-components';",
    "import {\n  DialogTrigger as ReactAriaDialogTrigger,\n  OverlayArrow,\n  Popover as ReactAriaPopover,\n  Pressable,\n} from 'react-aria-components';",
  ],
  [
    "core/Popover/Popover.tsx",
    "export const PopoverTrigger = (props: DialogTriggerProps) => {\n  return <ReactAriaDialogTrigger {...props} />;\n};",
    "export const PopoverTrigger = (props: DialogTriggerProps) => {\n  const [trigger, ...rest] = React.Children.toArray(props.children);\n  return (\n    <ReactAriaDialogTrigger {...props}>\n      <Pressable>{trigger}</Pressable>\n      {rest}\n    </ReactAriaDialogTrigger>\n  );\n};",
  ],
  [
    "core/index.ts",
    "/* ********************************************************\n * React Aria Exports                                     *\n * ****************************************************** */\nexport { Pressable } from 'react-aria-components';\nexport { DialogTrigger } from 'react-aria-components';\nexport { ListBox as AriaListBox } from 'react-aria-components';\nexport { ListBoxItem as AriaListBoxItem } from 'react-aria-components';\nexport { MenuTrigger } from 'react-aria-components';",
    `/* ********************************************************
 * React Aria Exports                                     *
 * ****************************************************** */
import React from 'react';
import {
  DialogTrigger as _DialogTrigger,
  MenuTrigger as _MenuTrigger,
  Pressable as _Pressable,
} from 'react-aria-components';

export { Pressable } from 'react-aria-components';

/**
 * React 19 compat shim: Nimbus's core Button doesn't register as a "pressable" child of
 * these trigger components without an explicit <Pressable> wrapper around the trigger
 * element (the first child) — see docs/keeping-docs-in-sync.md in the docs repo.
 */
function withPressableTrigger(Trigger) {
  return function PatchedTrigger({ children, ...props }) {
    const [trigger, ...rest] = React.Children.toArray(children);
    return React.createElement(Trigger, props, React.createElement(_Pressable, null, trigger), ...rest);
  };
}

export const DialogTrigger = withPressableTrigger(_DialogTrigger);
export const MenuTrigger = withPressableTrigger(_MenuTrigger);
export { ListBox as AriaListBox } from 'react-aria-components';
export { ListBoxItem as AriaListBoxItem } from 'react-aria-components';`,
  ],
])

// icons: built React components (app + brand) and the raw SVGs
copyTree(path.join(assetsRepo, "icons"), path.join(dest, "assets", "icons"))

const meta = {
  syncedAt: new Date().toISOString(),
  sources: {
    "nimbus-ui": { version: pkgVersion(uiRepo), commit: git(uiRepo, "rev-parse HEAD") },
    "cc-design-tokens": { version: pkgVersion(tokensRepo), commit: git(tokensRepo, "rev-parse HEAD") },
    "nimbus-assets": { version: pkgVersion(assetsRepo), commit: git(assetsRepo, "rev-parse HEAD") },
  },
}
fs.writeFileSync(path.join(dest, "SOURCE.json"), JSON.stringify(meta, null, 2) + "\n")

// ---- manifest: static import map for every story file (Next has no glob imports)
const coreDir = path.join(dest, "core")
const components = fs
  .readdirSync(coreDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort()

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    return e.isDirectory() ? walk(p) : [p]
  })
}

const manifest = {}
for (const name of components) {
  const files = walk(path.join(coreDir, name)).map((f) => path.relative(coreDir, f).replaceAll("\\", "/"))
  const stories = files.filter((f) => /\.stories\.tsx$/.test(f))
  const docs = files.filter((f) => f.endsWith(".mdx"))
  manifest[name] = { stories, docs }
}

fs.mkdirSync(path.join(root, "src", "generated"), { recursive: true })
const header = "// AUTO-GENERATED by scripts/sync-nimbus.mjs - do not edit."
// pure data (safe for client bundles: nav, search)
fs.writeFileSync(
  path.join(root, "src", "generated", "nimbus-manifest.ts"),
  [
    header,
    "export const nimbusComponents: Record<string, { stories: string[]; docs: string[] }> = " +
      JSON.stringify(manifest, null, 2) +
      ";",
    "",
  ].join("\n")
)
// dynamic import map for story files (Next has no glob imports)
const lines = [
  header,
  "import type { StoryModule } from '@/lib/story-runtime'",
  "",
  "export const storyLoaders: Record<string, () => Promise<StoryModule>> = {",
]
for (const { stories } of Object.values(manifest)) {
  for (const s of stories) {
    lines.push(`  ${JSON.stringify(s)}: () => import(${JSON.stringify(`@nimbus/core/${s.replace(/\.tsx$/, "")}`)}),`)
  }
}
lines.push("}", "")
fs.writeFileSync(path.join(root, "src", "generated", "nimbus-stories.ts"), lines.join("\n"))

execSync(`node ${JSON.stringify(path.join(root, "scripts", "docgen.mjs"))}`, { stdio: "inherit" })
console.log(`Synced ${components.length} core components.`)
console.log(JSON.stringify(meta.sources, null, 2))
