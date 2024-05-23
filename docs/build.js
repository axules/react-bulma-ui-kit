const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const webpackConfig = require('./webpackSheets');

const glob = require('glob');
const path = require('path');


const SHEETS_PATH = path.resolve(__dirname, 'sheets');
const TEMPLATE_PATH = path.resolve(__dirname, 'sheet.template.ejs');

function getDirectories(src, callback) {
  glob(src + '/**/*.sheet.js', callback);
}

function compile(files) {
  // eslint-disable-next-line no-console
  console.log('Found files:', files);

  files.forEach((it) => {
    const fileName = path.basename(it).replace('.sheet.js', '');
    Object.assign(webpackConfig.entry, { [fileName]: it });
    webpackConfig.plugins.push(
      new HtmlWebpackPlugin({
        filename: `${fileName}.html`,
        template: TEMPLATE_PATH,
        chunks: [fileName],
      }),
    );
  });

  // console.log('webpackConfig: ', webpackConfig);
  webpack(
    webpackConfig,
    (err, stats) => {
      if (err || stats?.hasErrors()) {
        console.error(err || stats.toString());
      }
    }
  );
}

function main() {
  // eslint-disable-next-line no-console
  console.log('Sheets path:', SHEETS_PATH);

  getDirectories(SHEETS_PATH, function (err, res) {
    if (err) {
      throw err;
    }
    compile(res);
  });
}

main();