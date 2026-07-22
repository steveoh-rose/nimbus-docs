const steps = [
  { label: "shadow-sm", className: "shadow-sm" },
  { label: "shadow", className: "shadow" },
  { label: "shadow-md", className: "shadow-md" },
  { label: "shadow-lg", className: "shadow-lg" },
  { label: "shadow-xl", className: "shadow-xl" },
]

export default function ShadowScaleDemo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-center justify-center gap-8 py-4">
      {steps.map((step) => (
        <div key={step.label} className="flex flex-col items-center gap-3">
          <div className={`size-16 rounded-lg border bg-card ${step.className}`} />
          <span className="font-mono text-xs text-muted-foreground">{step.label}</span>
        </div>
      ))}
    </div>
  )
}
