// src/pages/rss.xml.js
import rss from '@astrojs/rss';

/**
 * Shape of the Markdown modules imported via import.meta.glob.
 * Keeps TypeScript happy in .astro/.js environments too.
 */
/// <reference types="astro/client" />
/** @typedef {{frontmatter: {title: string, description?: string, pubDate: string|Date, draft?: boolean}, url: string}} PostModule */

export async function GET(context) {
  /** @type {Record<string, PostModule>} */
  const modules = import.meta.glob('../content/blog/*.md', { eager: true });

  // Normalize, drop drafts, sort by newest first
  const posts = Object.values(modules)
    .map((m) => ({
      link: m.url, // Astro provides a clean URL for content modules
      title: m.frontmatter.title,
      pubDate: new Date(m.frontmatter.pubDate),
      description: m.frontmatter.description ?? '',
      draft: m.frontmatter.draft ?? false,
    }))
    .filter((p) => !p.draft)
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Blog — Loïc Marigny',
    description: 'Billets de blog de Loïc Marigny',
    site: context.site, // taken from astro.config.mjs
    items: posts.map((p) => ({
      link: p.link,
      title: p.title,
      pubDate: p.pubDate,
      description: p.description,
    })),
    stylesheet: false, // keep default XML; set to a URL if you want a styled feed
  });
}
