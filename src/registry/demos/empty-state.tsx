import { InboxIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function EmptyStateDemo() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3 rounded-lg border border-dashed p-10 text-center">
      <div className="flex size-12 items-center justify-center rounded-full bg-muted">
        <InboxIcon className="size-6 text-muted-foreground" />
      </div>
      <div className="space-y-1">
        <p className="font-medium">No connections yet</p>
        <p className="text-sm text-muted-foreground">
          Create your first connection to start routing traffic.
        </p>
      </div>
      <Button size="sm">New connection</Button>
    </div>
  )
}
