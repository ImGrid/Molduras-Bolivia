// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mbimportadora.com', // TODO: actualizar con dominio real
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});