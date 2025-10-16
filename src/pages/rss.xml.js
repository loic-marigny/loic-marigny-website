// src/pages/rss.xml.js
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: "Blog — Loïc Marigny",
    description: "Billets de blog de Loïc Marigny",
    site: context.site, // set in astro.config.mjs
    items: posts.map((p) => ({
      link: `/blog/${p.slug}`,
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description ?? "",
    })),
  });
}
