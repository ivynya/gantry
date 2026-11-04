import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */ const config = {
	plugins: [
		sveltekit({
			// Consult https://github.com/sveltejs/svelte-preprocess
			// for more information about preprocessors
			preprocess: preprocess(),
			adapter: adapter(),
			paths: { base: '/gantry' }
		})
	]
};

export default config;
