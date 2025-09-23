const path = require('path');
// const glob = require('glob-all');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('glob');


const FILES_ENTRY = Object.fromEntries(
  glob.sync(path.resolve(__dirname, 'src') + '/**/*.sheet.js')
    .map((it) => {
      const fileName = path.basename(it).replace('.jsx', '');
      return !fileName.startsWith('_') && [fileName, it];
    })
    .filter(Boolean)
);

// const COMPONENTS = [
//   'Button',
//   'Checkbox',
//   'Control',
//   'Field',
//   'HelpText',
//   'Label',
//   'SubmitForm',
//   'TextInput'
// ].reduce((R, it) => Object.assign(R, { [it]: [`./src/components/${it}.jsx`] }), {});

module.exports = {
  entry: FILES_ENTRY,
  context: process.cwd(),
  output: {
    filename: '[name].js',
    clean: true,
  },
  externals: {
    react: 'react',
    reactDOM: 'react-dom'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.json', '.png', '.jpg', '.jpeg', '.svg'],
  },
  cache: true,
  optimization: {
    // moduleIds: 'named',
    // chunkIds: 'named',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        // cache: false,
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
    splitChunks: {
      name: 'main',
      chunks: 'all',
      minChunks: 1,
      minSize: 1,
      cacheGroups: {
        utils: {
          test: /node_modules|([/\\]src[/\\]components[/\\]_utils[/\\])/i,
          chunks: 'all',
          name: 'utils',
          priority: 5,
          enforce: true,
          reuseExistingChunk: true
        },
      }
    },
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.resolve(process.cwd(), 'src'),
        options: {
          configFile: path.resolve(process.cwd(), 'babel.config.js')
        },
        exclude: /node_modules|\.test\.js/,
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
  ],
};