const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

const buildPath = path.resolve(__dirname, "dist");

module.exports = {
	devtool: "eval-cheap-module-source-map",
	entry: "./src/index.js",
	output: {
		filename: "[name].[hash:20].js",
		path: buildPath
	},
	devServer: {
		port: 9000,
		host: "0.0.0.0", // Allow dev server on local network, not just localhost https://stackoverflow.com/a/35419631
		allowedHosts: ["localhost", "local.drew"],
		contentBase: buildPath
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{
						// creates style nodes from JS strings
						loader: "style-loader",
						options: {
							sourceMap: true
						}
					},
					{
						// translates CSS into CommonJS
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					},
					{
						// compiles Sass to CSS
						loader: "sass-loader",
						options: {
							outputStyle: "expanded",
							sourceMap: true,
							sourceMapContents: true
						}
					}
					// Please note we are not running postcss here
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(buildPath),
		new CopyWebpackPlugin([{ from: "./src/assets", to: "assets/" }], { dot: true }),
		new HtmlWebpackPlugin({
			template: "./src/pages/home/home.html",
			inject: true,
			filename: "index.html"
		}),
		new StyleLintPlugin({
			configFile: "./stylelint.config.js",
			files: "./src/styles/!(vendor)/**/*.scss",
			syntax: "scss"
		}),
		new WebpackBuildNotifierPlugin({
			title: "Webpack Build",
			suppressSuccess: true,
			successIcon: "./src/assets/images/icon.png",
			successSound: "Notification.Reminder" // Notification.Default, Notification.IM, Notification.Mail, Notification.Reminder, Notification.SMS (https://docs.microsoft.com/en-us/previous-versions/windows/apps/hh761492(v=win.10)#non-looping-sounds)
		})
	]
};
