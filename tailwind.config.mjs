/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'light-red': 'hsla(0, 100%, 67%,0.10)',
			'orangey-yellow': 'hsla(39, 100%, 56%,0.10)',
			'green-teal': 'hsla(166, 100%, 37%,0.10)',
			'cobalt-blue': 'hsla(234, 85%, 45%,0.10)',
			'light-slate-blue': 'hsl(252, 100%, 67%)',
			'light-royal-blue': 'hsl(241, 81%, 54%)',
			'violet-blue': 'hsla(256, 72%, 46%, 1)',
			'persian-blue': 'hsla(241, 72%, 46%, 0)',
			'white': 'hsl(0, 0%, 100%)',
			'pale-blue':'hsl(221, 100%, 96%)',
			'light-lavander':'hsl(241, 100%, 89%)',
			'dark-gray-blue':'hsl(224, 30%, 27%)',
			
		},
	},
	plugins: [],
}
