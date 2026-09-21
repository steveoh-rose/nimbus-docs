import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"

import { mdxComponents } from "@/components/mdx-components"
import { ApiTable, StoriesList, StoryBlock } from "@/components/nimbus/blocks"
import { Alert, AlertDescription } from "@/components/ui/alert"
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
}

export function MdxBody({ source, format = "mdx" }: { source: string; format?: "mdx" | "md" }) {
  return (
    <div className="prose prose-neutral max-w-none prose-headings:scroll-mt-24 prose-pre:border-none prose-pre:bg-transparent prose-pre:p-0">
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
              [
                rehypePrettyCode,
                {
                  theme: { light: "github-light-default", dark: "github-dark-default" },
                  defaultLang: "tsx",
                },
              ],
            ],
          },
        }}
      />
    </div>
  )
}
