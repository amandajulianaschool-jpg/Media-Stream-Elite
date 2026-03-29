import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.streamvault.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'da', 'no', 'sv', 'fi', 'is'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          da: 'da',
          no: 'no',
          sv: 'sv',
          fi: 'fi',
          is: 'is',
        },
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '19326'),
    allowedHosts: true,
  },
});
