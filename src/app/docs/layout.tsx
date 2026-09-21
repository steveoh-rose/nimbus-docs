import { DocsSidebar } from "@/components/docs-sidebar"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-1 items-start gap-8 px-4 lg:px-8">
      <DocsSidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}
