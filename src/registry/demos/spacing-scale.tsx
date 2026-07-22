const steps = [1, 2, 3, 4, 6, 8, 12, 16, 24]

export default function SpacingScaleDemo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      {steps.map((step) => (
        <div key={step} className="flex items-center gap-4">
          <span className="w-16 shrink-0 font-mono text-xs text-muted-foreground">
            {step * 0.25}rem
          </span>
          <div className={`h-4 rounded bg-primary`} style={{ width: `${step * 0.25}rem` }} />
        </div>
      ))}
    </div>
  )
}
