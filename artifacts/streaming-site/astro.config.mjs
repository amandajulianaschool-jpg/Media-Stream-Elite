import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://streamvault.tv',
  output: 'static',
  integrations: [
    react(),
    tailwind(),
    sitemap(),
  ],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '19326'),
    allowedHosts: true,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
