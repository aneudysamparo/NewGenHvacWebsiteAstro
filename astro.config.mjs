// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://newgenhvac.com',
  integrations: [
    sitemap({
      // Keep error pages and the llms.txt endpoint out of the sitemap.
      filter: (page) =>
        !page.includes('/404') && !page.includes('/500') && !page.includes('/llms.txt'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
