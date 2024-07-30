import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import db from "@astrojs/db";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  security: {
		checkOrigin: true
	},
  integrations: [db(), tailwind()]
});