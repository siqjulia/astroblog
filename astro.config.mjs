// @ts-check
import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: 'https://siqjulia.github.io', // DOMAIN
  base: '/astroblog', // REPOSITORY
  output: 'static',
  integrations: [svelte()]
});