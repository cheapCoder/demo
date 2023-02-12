import { defineConfig } from "astro/config";

import babel from "vite-plugin-babel";

// https://astro.build/config
import react from "@astrojs/react";
import reactPlugin from "@vitejs/plugin-react";

// https://astro.build/config
export default defineConfig({
	// output: "static",
	vite: {
		// plugins: [
		// reactPlugin({
		// 	babel: {
		// 		plugins: [
		// 			["@babel/plugin-proposal-decorators", { legacy: true }],
		// 			["@babel/plugin-proposal-class-properties", { loose: true }],
		// 		],
		// 	},
		// }),
		// babel({
		// 	babelConfig: {
		// 		plugins: [
		// 			"@babel/plugin-proposal-object-rest-spread",
		// 			[
		// 				"@babel/plugin-proposal-decorators",
		// 				{
		// 					decoratorsBeforeExport: true,
		// 				},
		// 			],
		// 			"@babel/plugin-proposal-class-properties",
		// 			"@babel/plugin-proposal-export-default-from",
		// 			"@babel/plugin-proposal-export-namespace-from",
		// 		],
		// 	},
		// }),
		// ],
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
					modifyVars: {
						"root-entry-name": "default",
					},
				},
			},
		},
	},
	integrations: [react()],
});
