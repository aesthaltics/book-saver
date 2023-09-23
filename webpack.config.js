const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const getHtmlPlugins = (chunks) => {
	return chunks.map(
		(chunk) =>
			new HtmlWebpackPlugin({
				title: "test",
				filename: `${chunk}.html`,
				chunks: [chunk],
			})
	);
};

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
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "[name][ext]",
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"],
		alias: {
			"@": path.resolve(__dirname, "src/"),
		},
	},
	output: {
		filename: "[name].js",
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: path.resolve("src", "static") },
				// { from: "other", to: "public" },
			],
		}),
		...getHtmlPlugins(["popup"]),
	],
	devtool: "cheap-module-source-map",
	optimization: {
		splitChunks: {
			chunks(chunk) {
				// exclude `my-excluded-chunk`
				return chunk.name !== "my-excluded-chunk";
			},
		},
	},
};
