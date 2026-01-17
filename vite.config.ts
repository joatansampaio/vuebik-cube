import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const repoName = "vuebik-cube";

export default defineConfig({
	plugins: [vue()],
	base: `/${repoName}/`,
});
