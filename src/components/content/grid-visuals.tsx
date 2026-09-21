import { cn } from "@/lib/utils"

/* Static class maps so Tailwind can see every span at build time. */
const SPAN: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  6: "col-span-6",
  8: "col-span-8",
  12: "col-span-12",
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[10px] leading-none text-[var(--color-primary-500)]">{children}</span>
}

function Col({ span, children, className }: { span: number; children?: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        SPAN[span],
        "flex min-h-9 items-center justify-center rounded-[3px] bg-[var(--color-primary-200)] px-1",
        className
      )}
    >
      {children}
    </div>
  )
}

/** The 12-column row, drawn once with column numbers. */
export function ColumnRuler() {
  return (
    <div className="not-prose my-4 rounded-lg border bg-white p-4">
      <div className="grid grid-cols-12 gap-[10px]">
        {Array.from({ length: 12 }, (_, i) => (
          <Col key={i} span={1}>
            <Label>{i + 1}</Label>
          </Col>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">12 columns, always separated by a 10px gutter.</p>
    </div>
  )
}

/** Shows the even splits the 12-column grid allows. */
export function ColumnLayouts() {
  const layouts: Array<{ title: string; span: number; count: number }> = [
    { title: "4 x 3 columns", span: 3, count: 4 },
    { title: "3 x 4 columns", span: 4, count: 3 },
    { title: "2 x 6 columns", span: 6, count: 2 },
    { title: "1 x 12 columns", span: 12, count: 1 },
  ]
  return (
    <div className="not-prose my-4 space-y-4 rounded-lg border bg-white p-4">
      {layouts.map((l) => (
        <div key={l.title}>
          <div className="mb-1.5 text-xs font-medium text-muted-foreground">{l.title}</div>
          <div className="grid grid-cols-12 gap-[10px]">
            {Array.from({ length: l.count }, (_, i) => (
              <Col key={i} span={l.span}>
                <Label>{l.span}</Label>
              </Col>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/** Parts of the whole: navigation, container, grid, rows, columns. */
export function GridAnatomy() {
  return (
    <div className="not-prose my-4 overflow-hidden rounded-lg border bg-white">
      <div className="flex h-9 items-center bg-[var(--color-accent-dark)] px-3 text-[11px] text-white">
        Main navigation (top)
      </div>
      <div className="flex">
        <div className="flex w-24 shrink-0 items-start bg-[var(--color-accent-dark)]/90 p-3 text-[11px] text-white sm:w-32">
          Contextual navigation (left)
        </div>
        <div className="flex-1 bg-[var(--color-bg-200)] p-3 sm:p-5">
          <div className="mb-1 text-[11px] font-medium text-muted-foreground">Container</div>
          <div className="mx-auto max-w-[520px] rounded border border-dashed border-primary bg-white p-3">
            <div className="mb-2 text-[11px] font-medium text-primary">Responsive grid</div>
            <div className="space-y-2">
              <div>
                <div className="mb-1 text-[10px] text-muted-foreground">Row</div>
                <div className="grid grid-cols-12 gap-[6px]">
                  <Col span={4}><Label>Column</Label></Col>
                  <Col span={4}><Label>Column</Label></Col>
                  <Col span={4}><Label>Column</Label></Col>
                </div>
              </div>
              <div>
                <div className="mb-1 text-[10px] text-muted-foreground">Row</div>
                <div className="grid grid-cols-12 gap-[6px]">
                  <Col span={8}><Label>Column</Label></Col>
                  <Col span={4}><Label>Column</Label></Col>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Frame({ title, width, children }: { title: string; width: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-white p-4">
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <span className="text-sm font-semibold">{title}</span>
        <span className="font-mono text-xs text-muted-foreground">{width}</span>
      </div>
      {children}
    </div>
  )
}

/** The worked example: a header with two columns and three tiles at each grid size. */
export function GridExample() {
  const header = (span: number) => (
    <>
      <Col span={span} className="bg-[var(--color-accent-bright-1-200)]"><Label>Header {span}</Label></Col>
      <Col span={span} className="bg-[var(--color-accent-bright-1-200)]"><Label>Header {span}</Label></Col>
    </>
  )
  const tiles = (span: number) =>
    [1, 2, 3].map((n) => (
      <Col key={n} span={span} className="min-h-12">
        <Label>Tile {span}</Label>
      </Col>
    ))
  return (
    <div className="not-prose my-4 grid gap-4 lg:grid-cols-3">
      <Frame title="Large desktop" width="12 columns">
        <div className="grid grid-cols-12 gap-[10px]">{header(6)}</div>
        <div className="mt-[10px] grid grid-cols-12 gap-[10px]">{tiles(4)}</div>
      </Frame>
      <Frame title="Small desktop" width="12 columns">
        <div className="grid grid-cols-12 gap-[10px]">{header(6)}</div>
        <div className="mt-[10px] grid grid-cols-12 gap-[10px]">{tiles(6)}</div>
      </Frame>
      <Frame title="Small device" width="1 column">
        <div className="grid grid-cols-12 gap-[10px]">{header(12)}</div>
        <div className="mt-[10px] grid grid-cols-12 gap-[10px]">{tiles(12)}</div>
      </Frame>
    </div>
  )
}
