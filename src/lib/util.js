export const slugFromPath = (path) =>
  path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null
export const markdownPattern = `./*.{md,svx,svelte.md}`
