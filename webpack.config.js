const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin, EnvironmentPlugin } = require('webpack');

const { NODE_ENV } = process.env;
const isDevMode = NODE_ENV === 'development';

const PUBLIC_PATH = '/komus_num/app/build/';

module.exports = {
	entry: {
		main: './src/index.tsx',
	},
	mode: NODE_ENV || 'development',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.svg'],
		alias: {
			'@core': path.resolve(__dirname, './src/core'),
			'@src': path.resolve(__dirname, './src'),
			'@modules': path.resolve(__dirname, './src/modules'),
			'@components': path.resolve(__dirname, './src/components/'),
			'@icons': path.resolve(__dirname, './src/assets/icons'),
			'@images': path.resolve(__dirname, './src/assets/images'),
			'@ui': path.resolve(__dirname, './src/ui'),
		},
	},
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: isDevMode ? '/' : PUBLIC_PATH,
		//publicPath: '/komus_num/app/build/',
		//publicPath: '/',
		filename: 'main.[hash].js'
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},

		port: 4200,
		historyApiFallback: true,
		hot: true,
	},
	optimization: {
		minimize: !isDevMode,
	},
	module: {
		rules: [
			{
				test: /\.(js|ts|tsx|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-modules-typescript-loader?modules',
					{
						loader: 'css-loader',
						options: {
							modules: {
							  mode: 'local',
							  localIdentName: '[name]__[local]__[hash:base64:5]',
							  auto: /\.module\.\w+$/i,
							},
						  },
					},
					'sass-loader',
				],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				use: ['url-loader'],
			},
		],
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			environment: process.env.NODE_ENV
		}),
		new MiniCssExtractPlugin({
			filename: 'index.css',
		}),
		new EnvironmentPlugin({
			API: "http://172.16.3.123:81",
		}),
		new DefinePlugin({
			"API": JSON.stringify("http://172.16.3.123:81"),
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
};
