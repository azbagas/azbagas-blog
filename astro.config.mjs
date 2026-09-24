// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://azbagas.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    sitemap(),
  ],
});
