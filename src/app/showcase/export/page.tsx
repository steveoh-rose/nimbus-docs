import { NimbusReelExport } from "@/components/showcase/nimbus-reel"
import { reelData } from "@/lib/reel-data"

export const metadata = {
  title: "Showcase export",
  robots: { index: false, follow: false },
}

export default function ShowcaseExportPage() {
  return <NimbusReelExport data={reelData()} />
}
