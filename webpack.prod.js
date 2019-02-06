const path = require("path");

const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

const buildPath = path.resolve(__dirname, "dist");

module.exports = {
	devtool: "none",
	entry: "./src/index.js",
	output: {
		filename: "[name].[hash:20].js",
		path: buildPath
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",

				options: {
					presets: ["@babel/preset-env"]
				}
			},
			{
				test: /\.(scss|css|sass)$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							// translates CSS into CommonJS
							loader: "css-loader",
							options: {
								sourceMap: true
							}
						},
						{
							// Runs compiled CSS through postcss for vendor prefixing
							loader: "postcss-loader",
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
					],
					fallback: "style-loader"
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/pages/home/home.html",
			inject: "body",
			filename: "index.html"
		}),
		new CleanWebpackPlugin(buildPath),
		new CopyWebpackPlugin([{ from: "./src/assets", to: "assets/" }], { dot: true }),
		new FaviconsWebpackPlugin({
			// Your source logo
			logo: "./src/assets/images/icon.png",
			// The prefix for all image files (might be a folder or a name)
			prefix: "icons-[hash]/",
			// Generate a cache file with control hashes and
			// don't rebuild the favicons until those hashes change
			persistentCache: true,
			// Inject the html into the html-webpack-plugin
			inject: true,
			// favicon background color (see https://github.com/haydenbleasel/favicons#usage)
			background: "#222",
			// favicon app title (see https://github.com/haydenbleasel/favicons#usage)
			title: "Andrew Brey - Software Developer",

			// which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
			icons: {
				android: false,
				appleIcon: true,
				appleStartup: false,
				coast: false,
				favicons: true,
				firefox: false,
				opengraph: false,
				twitter: false,
				yandex: false,
				windows: false
			}
		}),
		new ExtractTextPlugin("styles.[md5:contenthash:hex:20].css", {
			allChunks: true
		}),
		new OptimizeCssAssetsPlugin({
			cssProcessor: require("cssnano"),
			cssProcessorOptions: {
				/*map: {
            inline: false,
        },*/
				discardComments: {
					removeAll: true
				},
				reduceIdents: {
					keyframes: false
				},
				discardUnused: {
					keyframes: false
				}
			},
			canPrint: true
		}),
		new WebpackBuildNotifierPlugin({
			title: "Webpack Build",
			suppressSuccess: true,
			successIcon: "./src/assets/images/icon.png",
			successSound: "Notification.Reminder" // Notification.Default, Notification.IM, Notification.Mail, Notification.Reminder, Notification.SMS (https://docs.microsoft.com/en-us/previous-versions/windows/apps/hh761492(v=win.10)#non-looping-sounds)
		})
	]
};
