export const slugFromPath = (path) =>
  path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null

export const markdownPattern = `./*.{md,svx,svelte.md}`

type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { month: 'short', day: 'numeric', year: 'numeric' })
	return formatter.format(new Date(date))
}
