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
        "not-prose my-4 rounded-2xl border p-5 text-[0.93rem] leading-relaxed",
        tone === "do" && "border-[var(--color-success-200)] bg-[var(--color-success-100)]",
        tone === "dont" && "border-[var(--color-error-200)] bg-[var(--color-error-100)]",
        tone === "note" && "border-[var(--color-primary-200)] bg-[var(--color-primary-100)]"
      )}
    >
      <div
        className={cn(
          "mb-2 flex items-center gap-2 font-heading font-semibold",
          tone === "do" && "text-[var(--color-success-500)]",
          tone === "dont" && "text-[var(--color-error-500)]",
          tone === "note" && "text-[var(--color-primary-500)]"
        )}
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-background">
          <Icon className="size-4" />
        </span>
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
