import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"

import { mdxComponents } from "@/components/mdx-components"
import { CODE_THEME } from "@/components/code-block"
import { ApiTable, StoriesList, StoryBlock } from "@/components/nimbus/blocks"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Do, DoDont, Dont, Note } from "@/components/content/guidance"
import { ColumnLayouts, ColumnRuler, GridAnatomy, GridExample } from "@/components/content/grid-visuals"
import { ToneTraits } from "@/components/content/tone-traits"
import { ValidationDemo } from "@/components/content/validation-demo"
import { List, Info } from "@nimbus/assets/icons/app"

/** Stand-ins for legacy nimbus-ui pieces some Storybook pages embed inline. */
function InlineMessage({ description }: { variant?: string; description?: React.ReactNode }) {
  return (
    <Alert className="not-prose my-4">
      <Info />
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}

const components = {
  ...mdxComponents,
  InlineMessage,
  List,
  StoryBlock,
  StoriesList,
  ApiTable,
  // guidance + foundations content
  Do,
  Dont,
  DoDont,
  Note,
  GridAnatomy,
  ColumnRuler,
  ColumnLayouts,
  GridExample,
  ToneTraits,
  ValidationDemo,
}

export function MdxBody({ source, format = "mdx" }: { source: string; format?: "mdx" | "md" }) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:scroll-mt-24 prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            format,
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
              [rehypePrettyCode, { theme: CODE_THEME, defaultLang: { block: "tsx" }, keepBackground: true }],
            ],
          },
        }}
      />
    </div>
  )
}
