import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

export default defineConfig({
  site: "https://cyns.space",
  output: "hybrid",
  integrations: [mdx(), sitemap(), tailwind(), react(), keystatic()],
});
