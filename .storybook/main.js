/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	core: {
		disableTelemetry: true, // 👈 Disables telemetry
	},
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
	],
	framework: {
		name: "@storybook/web-components-vite",
		options: {},
	},
};
export default config;
