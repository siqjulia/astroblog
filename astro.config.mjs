// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

export default defineConfig({
  // DOMAIN
  site: 'https://astroblog-jsiq.netlify.app/',

  output: 'static',
  integrations: [preact()],
});