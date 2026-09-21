const PATTERNS = [
  {
    name: "Form validation",
    href: "/docs/patterns/form-validation",
    detail: "When to validate, how to show errors, and how to keep a clear path to submission.",
  },
]

export function PatternIndex() {
  return (
    <ul className="not-prose my-6 divide-y border-y">
      {PATTERNS.map((p) => (
        <li key={p.name}>
          <a href={p.href} className="group flex flex-col gap-0.5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <span className="font-medium group-hover:text-primary">{p.name}</span>
            <span className="text-sm text-muted-foreground sm:max-w-md sm:text-right">{p.detail}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
