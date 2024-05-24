const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { ProvidePlugin } = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');
// const postcssNormalize = require('postcss-normalize');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const OUTPUT_PATH = path.resolve(__dirname, 'build');

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
    clean: false,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // new ProvidePlugin({
    //   React: 'react',
    //   ReactDOM: 'react-dom',
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'button.html',
    //   template: './src/sheet.template.ejs',
    //   chunks: ['button'],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'notification.html',
    //   template: './src/sheet.template.ejs',
    //   chunks: ['notification'],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'head.html',
    //   template: './src/sheet.template.ejs',
    //   chunks: ['head'],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          configFile: path.resolve(__dirname, 'babelSheets.js')
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
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         postcssNormalize(),
          //       ]
          //     }
          //   },
          // },
          {
            loader: 'sass-loader',
            options: {
              // precision: 8
            }
          },
          // {
          //   loader: 'sass-resources-loader',
          //   options: {
          //     resources: [
          //       path.resolve(__dirname, 'styles/_index.scss'),
          //     ]
          //   }
          // },
        ]
      },
    ],
  },
  optimization: {
    sideEffects: false,
    minimizer: [
      // new CssMinimizerPlugin({
      //   minify: CssMinimizerPlugin.parcelCssMinify,
      //   minimizerOptions: {
      //     targets: { chrome: 95 },
      //   }
      // }),

      // new TerserPlugin({
      //   terserOptions: {
      //     keep_classnames: true,
      //     keep_fnames: true,
      //   },
      // }),
      // new CssMinimizerPlugin(),
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
          test: /node_modules|styles/,
          name: 'vendor',
          enforce: true,
          reuseExistingChunk: true,
        },
        default: 'i',
      },
    },
  },
};