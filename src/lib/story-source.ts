import "server-only"
import fs from "node:fs"
import path from "node:path"
import ts from "typescript"

import { humanize } from "@/lib/story-runtime"

export type StoryInfo = {
  exportName: string
  name: string
  description: string
  code: string
}

const CORE_DIR = path.join(process.cwd(), "src", "nimbus", "core")

function dedent(text: string) {
  const lines = text.split("\n")
  const indents = lines.slice(1).filter((l) => l.trim()).map((l) => l.match(/^\s*/)![0].length)
  const min = indents.length ? Math.min(...indents) : 0
  return [lines[0], ...lines.slice(1).map((l) => l.slice(min))].join("\n").trim()
}

function jsDocText(node: ts.Node): string {
  const docs = (node as any).jsDoc as ts.JSDoc[] | undefined
  if (!docs?.length) return ""
  const comment = docs[docs.length - 1].comment
  if (typeof comment === "string") return comment.trim()
  return (comment ?? []).map((c) => ("text" in c ? c.text : "")).join("").trim()
}

const cache = new Map<string, StoryInfo[]>()

/**
 * Statically reads a `*.stories.tsx` file: export names in source order, their
 * JSDoc descriptions, and the JSX that renders each story (what Storybook's
 * "Show code" displays).
 */
export function readStories(storyKey: string): StoryInfo[] {
  const hit = cache.get(storyKey)
  if (hit) return hit

  const file = path.join(CORE_DIR, storyKey)
  const text = fs.readFileSync(file, "utf8")
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.ES2020, true, ts.ScriptKind.TSX)

  const metaComponent = /component:\s*([A-Za-z0-9_$]+)/.exec(text)?.[1]
  const stories: StoryInfo[] = []

  for (const stmt of sf.statements) {
    if (!ts.isVariableStatement(stmt)) continue
    if (!stmt.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) continue
    for (const decl of stmt.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name) || !decl.initializer) continue
      const exportName = decl.name.text
      let code = ""
      let init: ts.Expression = decl.initializer

      if (ts.isObjectLiteralExpression(init)) {
        const render = init.properties.find(
          (p): p is ts.PropertyAssignment | ts.MethodDeclaration =>
            (ts.isPropertyAssignment(p) || ts.isMethodDeclaration(p)) && p.name.getText() === "render"
        )
        if (render) {
          const fn = ts.isPropertyAssignment(render) ? render.initializer : render
          code = renderCode(fn as ts.Node, sf)
        } else if (metaComponent) {
          code = `<${metaComponent} {...args} />`
        }
      } else if (ts.isArrowFunction(init) || ts.isFunctionExpression(init)) {
        code = renderCode(init, sf)
      }

      stories.push({
        exportName,
        name: humanize(exportName),
        description: jsDocText(stmt),
        code: dedent(code),
      })
    }
  }
  cache.set(storyKey, stories)
  return stories
}

function renderCode(fn: ts.Node, sf: ts.SourceFile): string {
  if (ts.isArrowFunction(fn) || ts.isFunctionExpression(fn) || ts.isMethodDeclaration(fn)) {
    const body = fn.body
    if (body && !ts.isBlock(body)) {
      // `(args) => (<jsx/>)` — show just the JSX
      let expr: ts.Node = body
      while (ts.isParenthesizedExpression(expr)) expr = expr.expression
      return expr.getText(sf)
    }
    if (body && ts.isBlock(body)) {
      // single `return (...)` blocks: show just the JSX, otherwise the whole function
      const stmts = body.statements
      if (stmts.length === 1 && ts.isReturnStatement(stmts[0]) && stmts[0].expression) {
        let expr: ts.Node = stmts[0].expression
        while (ts.isParenthesizedExpression(expr)) expr = expr.expression
        return expr.getText(sf)
      }
    }
  }
  return fn.getText(sf)
}

/** Inline `code` -> <code>, everything else escaped: good enough for JSDoc prose. */
export function formatDescription(text: string): Array<{ code: boolean; text: string }> {
  return text.split(/(`[^`]+`)/g).filter(Boolean).map((part) =>
    part.startsWith("`") ? { code: true, text: part.slice(1, -1) } : { code: false, text: part }
  )
}
