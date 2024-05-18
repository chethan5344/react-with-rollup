import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
	input: 'src/index.jsx',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs'
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		babel({
			presets: ['@babel/preset-env', '@babel/preset-react'],
			plugins: [
				'babel-plugin-react-compiler'
			]
		}),
		replace({
			preventAssignment: true,
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		serve({
			open: true,
			verbose: true,
			contentBase: ["", "public"],
			host: "localhost",
			port: 3000,
		}),
		livereload({ watch: "dist" }),
	]
};