const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		popup: path.resolve("src/popup/popup.tsx"),
	},
	module: {
		rules: [
			{
				use: "ts-loader",
				test: /\.tsx$/,
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"],
	},
	output: {
		filename: "[name].js",
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: path.resolve("src", "assets", "manifest.json") },
				// { from: "other", to: "public" },
			],
		}),
		new HtmlWebpackPlugin({
			title: "test",
			filename: "popup.html",
			chunks: ["popup"],
		}),
	],
	devtool: "cheap-module-source-map",
};
