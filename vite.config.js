import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import vuetify from 'vite-plugin-vuetify';

// https://vite.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? '/python-lesson/' : '/',
	plugins: [vue(), vueDevTools(), vuetify({ autoImport: true })],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: undefined,
				inlineDynamicImports: true,
			},
		},
	},
	assetsInclude: ['**/*.pdf'],
});
