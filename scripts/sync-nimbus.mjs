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
