import { Loader2Icon, MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" aria-label="Send email">
          <MailIcon />
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button disabled>
          <Loader2Icon className="animate-spin" />
          Loading
        </Button>
        <Button disabled variant="outline">
          Disabled
        </Button>
      </div>
    </div>
  )
}
