const steps = [
  { label: "duration-150 · ease-out", className: "duration-150 ease-out" },
  { label: "duration-300 · ease-in-out", className: "duration-300 ease-in-out" },
  { label: "duration-500 · ease-in-out", className: "duration-500 ease-in-out" },
]

export default function MotionScaleDemo() {
  return (
    <div className="flex w-full max-w-xl flex-wrap items-center justify-center gap-8">
      {steps.map((step) => (
        <div key={step.label} className="flex flex-col items-center gap-3">
          <div
            className={`size-16 cursor-pointer rounded-lg bg-primary transition-transform ${step.className} hover:scale-90`}
          />
          <span className="font-mono text-xs text-muted-foreground">{step.label}</span>
        </div>
      ))}
    </div>
  )
}
