import { DocShell } from "@/components/doc-shell"
import { IconGallery } from "@/components/nimbus/icon-gallery"
import { CodeBlock } from "@/components/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = { title: "Icons" }

export default function IconsPage() {
  return (
    <DocShell
      title="Icons"
      description="Icons from @console/nimbus-assets. They take their color from currentColor and their size from font-size."
    >
      <CodeBlock
        code={"import { Add } from '@console/nimbus-assets/icons/app';\n\n<Add />"}
        lang="tsx"
        className="mt-0 mb-8"
      />
      <Tabs defaultValue="app" className="gap-4">
        <TabsList>
          <TabsTrigger value="app">App icons</TabsTrigger>
          <TabsTrigger value="brand">Brand icons</TabsTrigger>
        </TabsList>
        <TabsContent value="app">
          <IconGallery set="app" />
        </TabsContent>
        <TabsContent value="brand">
          <IconGallery set="brand" />
        </TabsContent>
      </Tabs>
    </DocShell>
  )
}
