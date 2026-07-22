import fs from "fs"
import path from "path"

import { demoComponents } from "@/registry"
import { CodeBlock } from "@/components/code-block"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function ComponentPreview({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Demo = demoComponents[name]

  if (!Demo) {
    return (
      <div className="my-6 rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
        Unknown demo <code className="font-mono">{name}</code>. Add it to{" "}
        <code className="font-mono">src/registry/demos</code> and register it in{" "}
        <code className="font-mono">src/registry/index.tsx</code>.
      </div>
    )
  }

  const filePath = path.join(process.cwd(), "src", "registry", "demos", `${name}.tsx`)
  const source = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : ""

  return (
    <Tabs defaultValue="preview" className={className ?? "my-6 gap-3"}>
      <TabsList className="w-fit">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className="flex min-h-[220px] w-full items-center justify-center rounded-lg border bg-dot-grid p-10">
          <Demo />
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={source} lang="tsx" />
      </TabsContent>
    </Tabs>
  )
}
