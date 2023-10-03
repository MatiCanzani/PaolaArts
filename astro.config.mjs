import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import netlify from "@astrojs/netlify/functions";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  image: {
    remotePatterns: [{
      protocol: "https"
    }]
  },
  adapter: vercel()
});