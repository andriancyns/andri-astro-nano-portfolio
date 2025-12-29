import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://cyns.space",
  output: "hybrid",
  adapter: netlify(),
  integrations: [mdx(), sitemap(), tailwind(), react(), keystatic()],
});
