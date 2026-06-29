import crypto from 'node:crypto'

/** Deterministic short alphanumeric slug from post id (same id => same slug every build). */
function deterministicSlug(id: string, length = 12): string {
  const hash = crypto.createHash('sha256').update(id).digest('hex')
  return hash.slice(0, length)
}

/** Entry shape used for slug map (blog or any collection with id + optional data.slug). */
type SlugMapEntry = { id: string; data: Record<string, unknown> }

/**
 * Build a map from post id to URL slug (no date, no folder path).
 * Uses frontmatter `slug` if set, otherwise a deterministic 12-char hex string (0-9a-f).
 * Ensures uniqueness when needed.
 */
export function buildBlogSlugMap(posts: SlugMapEntry[]): Map<string, string> {
  const idToSlug = new Map<string, string>()
  const usedSlugs = new Set<string>()

  for (const post of posts) {
    const slugFromData = (post.data as { slug?: string }).slug
    const preferred = slugFromData ?? deterministicSlug(post.id)
    let slug = preferred
    while (usedSlugs.has(slug)) {
      slug = `${deterministicSlug(post.id)}-${usedSlugs.size}`
    }
    usedSlugs.add(slug)
    idToSlug.set(post.id, slug)
  }

  return idToSlug
}

/** Get the URL path for a blog post (e.g. /blog/my-slug). */
export function getBlogPostUrl(id: string, slugMap: Map<string, string>): string {
  const slug = slugMap.get(id) ?? id.split('/').pop() ?? id
  return `/blog/${slug}`
}
