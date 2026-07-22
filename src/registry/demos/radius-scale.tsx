const steps = [
  { label: "radius-sm", className: "rounded-sm" },
  { label: "radius-md", className: "rounded-md" },
  { label: "radius-lg", className: "rounded-lg" },
  { label: "radius-xl", className: "rounded-xl" },
  { label: "radius-2xl", className: "rounded-2xl" },
  { label: "radius-full", className: "rounded-full" },
]

export default function RadiusScaleDemo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-end justify-center gap-6">
      {steps.map((step) => (
        <div key={step.label} className="flex flex-col items-center gap-2">
          <div className={`size-16 border-2 border-primary ${step.className}`} />
          <span className="font-mono text-xs text-muted-foreground">{step.label}</span>
        </div>
      ))}
    </div>
  )
}
