"use client"

import * as React from "react"
import dynamic from "next/dynamic"

import type { ReelData } from "./nimbus-reel"

const NimbusReel = dynamic(() => import("./nimbus-reel").then((mod) => mod.NimbusReel), {
  ssr: false,
  loading: () => <ReelPlaceholder />,
})

function ReelPlaceholder() {
  return <div className="aspect-video w-full animate-pulse rounded-xl border bg-[var(--color-bg-200)]" />
}

/** Loads the reel's code only when it scrolls near the viewport, so the page it sits on stays light. */
export function LazyReel({ data }: { data: ReelData }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [near, setNear] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true)
          io.disconnect()
        }
      },
      { rootMargin: "400px 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return <div ref={ref}>{near ? <NimbusReel data={data} /> : <ReelPlaceholder />}</div>
}
