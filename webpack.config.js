const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Rakuten Tv Demo',
			template: './index.ejs',
		}),
	],
	devtool: 'inline-source-map',
	devServer: {
		host: 'localhost.rakuten.tv',
	},
	output: {
		filename: '[name].[contenthash].js',
	},
};
