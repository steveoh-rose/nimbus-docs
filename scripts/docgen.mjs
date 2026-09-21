/**
 * Extracts component prop tables (types + JSDoc) from the vendored Nimbus core
 * sources with react-docgen-typescript — the same source Storybook's docs use.
 * Writes src/generated/props.json. Run automatically by `npm run sync`.
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import ts from "typescript"
import { withCompilerOptions } from "react-docgen-typescript"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const coreDir = path.join(root, "src", "nimbus", "core")

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) return e.name.startsWith("__") || e.name === "docs" ? [] : walk(p)
    return /\.tsx$/.test(e.name) ? [p] : []
  })
}

const parser = withCompilerOptions(
  {
    jsx: ts.JsxEmit.ReactJSX,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2017,
    skipLibCheck: true,
    baseUrl: root,
    paths: { "@nimbus/*": ["src/nimbus/*"] },
  },
  {
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
    shouldIncludePropTagMap: false,
    // keep only props declared in Nimbus sources (drop react / react-aria noise)
    propFilter: (prop) => !prop.parent || !prop.parent.fileName.includes("node_modules"),
  }
)

const out = {}
for (const dir of fs.readdirSync(coreDir, { withFileTypes: true }).filter((d) => d.isDirectory())) {
  const files = walk(path.join(coreDir, dir.name))
  if (!files.length) continue
  let docs = []
  try {
    docs = parser.parse(files)
  } catch (err) {
    console.warn(`docgen failed for ${dir.name}: ${err.message}`)
  }
  const seen = new Set()
  out[dir.name] = docs
    .filter((d) => Object.keys(d.props).length && !seen.has(d.displayName) && seen.add(d.displayName))
    .map((d) => ({
      name: d.displayName,
      description: d.description || "",
      props: Object.values(d.props)
        .map((p) => ({
          name: p.name,
          type: p.type?.name ?? "",
          required: !!p.required,
          defaultValue: p.defaultValue?.value ?? null,
          description: p.description || "",
        }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    }))
}

fs.mkdirSync(path.join(root, "src", "generated"), { recursive: true })
fs.writeFileSync(path.join(root, "src", "generated", "props.json"), JSON.stringify(out, null, 1) + "\n")
const n = Object.values(out).reduce((a, v) => a + v.length, 0)
console.log(`Docgen: ${n} components with props across ${Object.keys(out).length} folders.`)
