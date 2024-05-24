const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const webpackConfig = require('./webpackSheets');

const glob = require('glob');
const path = require('path');
const fs = require('fs');


const SHEETS_PATH = path.resolve(__dirname, 'sheets');
const TEMPLATE_PATH = path.resolve(__dirname, 'sheet.template.ejs');

function getDirectories(src, callback) {
  glob(src + '/**/*.sheet.js', callback);
}

function cleanOutput(outputPath) {
  if (!fs.existsSync(outputPath)) return;
  if (!path.resolve(outputPath).startsWith(__dirname)) {
    throw new Error('Output directory is insecure:', outputPath);
  }
  // eslint-disable-next-line
  console.log('Clean output:', outputPath);
  fs.readdirSync(outputPath, { withFileTypes: true })
    .forEach(f => {
      fs.rmSync(path.resolve(f.path, f.name), { recursive: true });
    });
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

function createSeparateSheets(files) {
  files.forEach((it) => {
    const sheet = require(it);
    console.log(Object.keys(sheet));
  });
}

function main() {
  cleanOutput(webpackConfig.output.path);
  // eslint-disable-next-line no-console
  console.log('Sheets path:', SHEETS_PATH);

  getDirectories(SHEETS_PATH, function (err, files) {
    if (err) {
      throw err;
    }
    process.env.NODE_ENV = 'doc';
    // createSeparateSheets(files);
    compile(files);
  });
}

main();