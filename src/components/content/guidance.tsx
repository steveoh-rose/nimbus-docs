import { CheckCircle, CancelCircle, Info } from "@nimbus/assets/icons/app"

import { cn } from "@/lib/utils"

function Card({
  tone,
  label,
  icon: Icon,
  children,
}: {
  tone: "do" | "dont" | "note"
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "not-prose my-3 rounded-md border p-4 text-sm",
        tone === "do" && "border-[var(--color-success-200)] bg-[var(--color-success-100)]",
        tone === "dont" && "border-[var(--color-error-200)] bg-[var(--color-error-100)]",
        tone === "note" && "border-[var(--color-primary-200)] bg-accent"
      )}
    >
      <div
        className={cn(
          "mb-1 flex items-center gap-1.5 font-semibold",
          tone === "do" && "text-[var(--color-success-500)]",
          tone === "dont" && "text-[var(--color-error-500)]",
          tone === "note" && "text-accent-foreground"
        )}
      >
        <Icon className="size-4" />
        {label}
      </div>
      <div className="text-foreground [&_p]:m-0 [&_p+p]:mt-2">{children}</div>
    </div>
  )
}

export function Do({ children }: { children: React.ReactNode }) {
  return (
    <Card tone="do" label="Do" icon={CheckCircle}>
      {children}
    </Card>
  )
}

export function Dont({ children }: { children: React.ReactNode }) {
  return (
    <Card tone="dont" label="Don't" icon={CancelCircle}>
      {children}
    </Card>
  )
}

export function Note({ children, title = "Note" }: { children: React.ReactNode; title?: string }) {
  return (
    <Card tone="note" label={title} icon={Info}>
      {children}
    </Card>
  )
}

/** Side-by-side layout for a Do / Don't pair. */
export function DoDont({ children }: { children: React.ReactNode }) {
  return <div className="not-prose my-4 grid gap-4 md:grid-cols-2 [&>div]:my-0">{children}</div>
}
