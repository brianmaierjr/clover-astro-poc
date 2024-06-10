import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
	image: {
		domains: ["d36ai2hkxl16us.cloudfront.net"],
	},
	integrations: [
		sanity({
			projectId: "w5qbj6n9",
			dataset: "production",
			// Set useCdn to false if you're building statically.
			useCdn: false,
		}),
	],
});
