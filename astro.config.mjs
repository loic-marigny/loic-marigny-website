import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://loic-marigny.com', // important pour le sitemap
  integrations: [mdx(), sitemap()],
});