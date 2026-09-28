#!/usr/bin/env node
/**
 * Renders the showcase reel frame by frame and encodes it for the web.
 *
 *   npm run export:reel                       # needs the site running (npm run dev) on :3000
 *   npm run export:reel -- --fps 60 --crf 18  # smoother / higher quality
 *   npm run export:reel -- --scale 1          # 1280×720 instead of 1920×1080
 *   npm run export:reel -- --path /showcase/product-fruits/export --name product-fruits-reel
 *
 * Output (in ./exports): <name>.mp4 (H.264), <name>.webm (VP9), <name>-poster.jpg
 */
import { spawn } from "node:child_process"
import { once } from "node:events"
import { mkdir, stat } from "node:fs/promises"
import path from "node:path"
import { parseArgs } from "node:util"
import ffmpegPath from "ffmpeg-static"
import { chromium } from "playwright"

const { values } = parseArgs({
  options: {
    url: { type: "string", default: "http://localhost:3000" },
    path: { type: "string", default: "/showcase/export" },
    name: { type: "string", default: "nimbus-reel" },
    fps: { type: "string", default: "30" },
    scale: { type: "string", default: "1.5" },
    crf: { type: "string", default: "20" },
    out: { type: "string", default: "exports" },
    "no-webm": { type: "boolean", default: false },
  },
})

const fps = Number(values.fps)
const scale = Number(values.scale)
const outDir = path.resolve(values.out)
const files = {
  mp4: path.join(outDir, `${values.name}.mp4`),
  webm: path.join(outDir, `${values.name}.webm`),
  poster: path.join(outDir, `${values.name}-poster.jpg`),
}
await mkdir(outDir, { recursive: true })

const ffmpegArgs = [
  "-y",
  "-loglevel", "error",
  "-f", "image2pipe",
  "-framerate", String(fps),
  "-i", "-",
  "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", values.crf, "-preset", "slow", "-movflags", "+faststart",
  files.mp4,
]
if (!values["no-webm"]) {
  ffmpegArgs.push(
    "-c:v", "libvpx-vp9", "-pix_fmt", "yuv420p", "-b:v", "0", "-crf", "32",
    "-row-mt", "1", "-deadline", "good", "-cpu-used", "2",
    files.webm
  )
}

const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: scale })
  const url = new URL(values.path, values.url).href
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 120_000 })
    await page.waitForFunction(() => window.__reel, null, { timeout: 60_000 })
  } catch (error) {
    throw new Error(`Couldn't load ${url} — is the site running (npm run dev)?\n${error.message}`)
  }
  await page.evaluate(() => document.fonts.ready)

  const duration = await page.evaluate(() => window.__reel.duration)
  const frames = Math.round(duration * fps)
  const stage = page.locator("#reel-stage")
  console.log(`Rendering ${frames} frames (${duration.toFixed(1)}s at ${fps}fps, ${Math.round(1280 * scale)}×${Math.round(720 * scale)})`)

  const ffmpeg = spawn(ffmpegPath, ffmpegArgs, { stdio: ["pipe", "inherit", "inherit"] })
  const done = once(ffmpeg, "close")
  const started = Date.now()

  for (let i = 0; i < frames; i++) {
    await page.evaluate((t) => window.__reel.seek(t), i / fps)
    const png = await stage.screenshot({ type: "png" })
    if (!ffmpeg.stdin.write(png)) await once(ffmpeg.stdin, "drain")
    if (i % 10 === 0 || i === frames - 1) {
      const pct = (((i + 1) / frames) * 100).toFixed(0)
      process.stdout.write(`\r  frame ${i + 1}/${frames} (${pct}%) — ${((Date.now() - started) / 1000).toFixed(0)}s`)
    }
  }
  process.stdout.write("\n  encoding…\n")

  await page.evaluate((t) => window.__reel.seek(t), duration - 0.05)
  await stage.screenshot({ path: files.poster, type: "jpeg", quality: 90 })

  ffmpeg.stdin.end()
  const [code] = await done
  if (code !== 0) throw new Error(`ffmpeg exited with code ${code}`)

  for (const file of Object.values(files)) {
    const info = await stat(file).catch(() => null)
    if (info) console.log(`  ${path.relative(process.cwd(), file)}  ${(info.size / 1024 / 1024).toFixed(1)} MB`)
  }
} finally {
  await browser.close()
}
