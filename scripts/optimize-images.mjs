// One-off: shrink the product photos pulled from sofpour.com into web-sized webp.
// Run with `npm run optimize:images` after dropping new originals into public/img.
import { readdir, rename, stat, unlink } from 'node:fs/promises'
import { extname, join } from 'node:path'
import sharp from 'sharp'

const ROOT = 'public/img'
const MAX_WIDTH = 1400

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(path)
    else yield path
  }
}

let before = 0
let after = 0

for await (const path of walk(ROOT)) {
  const ext = extname(path).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

  const original = (await stat(path)).size
  const target = path.replace(/\.(jpe?g|png)$/i, '.webp')
  const tmp = `${target}.tmp`

  // The logo needs transparency; everything else is opaque product photography.
  const isLogo = path.includes('logo')

  await sharp(path)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: isLogo ? 90 : 82, alphaQuality: 100 })
    .toFile(tmp)

  await unlink(path)
  await rename(tmp, target)

  const size = (await stat(target)).size
  before += original
  after += size
  console.log(
    `${target.padEnd(46)} ${(original / 1024).toFixed(0).padStart(6)} KB -> ${(size / 1024).toFixed(0).padStart(5)} KB`,
  )
}

console.log(
  `\nTotal ${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(1)} MB ` +
    `(${(100 - (after / before) * 100).toFixed(0)}% smaller)`,
)
