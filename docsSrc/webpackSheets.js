const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const OUTPUT_PATH = path.resolve(__dirname, '../docs');

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.jsx', '.js', '.scss', '.css', '.sass'],
  },
  entry: {
    styles: path.resolve(__dirname, 'styles/_index.scss'),
    // notification: './src/Components/Notification/Notification.sheet.js',
    // head: './src/Components/head.js',
  },
  output: {
    filename: '[name].js',
    path: OUTPUT_PATH,
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          configFile: path.resolve(__dirname, 'babelSheets.js'),
        },
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: OUTPUT_PATH,
              // esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // precision: 8
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      minSize: 1,
      maxInitialRequests: Infinity,
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: /node_modules|(docsSrc[\\/](styles|utils|components|sheetRenderer|FrameMessenger))|(src[\\/](use|with|components[\\/]_utils))/i,
          name: 'vendor',
          enforce: true,
          reuseExistingChunk: true,
          priority: 19,
        },
        default: 'i',
      },
    },
  },
};
