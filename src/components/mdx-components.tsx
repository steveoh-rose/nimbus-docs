import type { MDXRemoteProps } from "next-mdx-remote/rsc"

import { MdxPre } from "@/components/mdx-pre"
import { ComponentPreview } from "@/components/component-preview"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const mdxComponents: MDXRemoteProps["components"] = {
  pre: MdxPre,
  table: (props) => <Table {...props} />,
  thead: (props) => <TableHeader {...props} />,
  tbody: (props) => <TableBody {...props} />,
  tr: (props) => <TableRow {...props} />,
  th: (props) => <TableHead {...props} />,
  td: (props) => <TableCell {...props} />,
  ComponentPreview,
}
