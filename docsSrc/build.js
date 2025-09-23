const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const webpackConfig = require('./webpackSheets');

const glob = require('glob');
const path = require('path');
const fs = require('fs');


const SHEETS_PATH = path.resolve(__dirname, 'sheets');
const SHEET_TEMPLATE_PATH = path.resolve(__dirname, 'sheet.template.ejs');
const MAIN_ENTRY_PATH = path.resolve(__dirname, 'index.js');
const MAIN_TEMPLATE_PATH = path.resolve(__dirname, 'index.template.ejs');


function cleanOutput(outputPath) {
  if (!fs.existsSync(outputPath)) return;
  // if (!path.resolve(outputPath).startsWith(__dirname)) {
  //   throw new Error('Output directory is insecure:', outputPath);
  // }
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
  const allSheets = [];

  files.forEach((it) => {
    const fileName = path.basename(it).replace('.sheet.js', '');

    Object.assign(webpackConfig.entry, { [fileName]: it });

    webpackConfig.plugins
      .push(new HtmlWebpackPlugin({
        filename: `${fileName}.html`,
        template: SHEET_TEMPLATE_PATH,
        chunks: [fileName],
      }));

    allSheets.push({
      name: fileName,
      path: `${fileName}.html`,
    });
  });

  Object.assign(webpackConfig.entry, { index: MAIN_ENTRY_PATH });

  webpackConfig.plugins
    .push(new HtmlWebpackPlugin({
      filename: 'index.html',
      template: MAIN_TEMPLATE_PATH,
      chunks: ['index'],
      SHEETS_LIST: JSON.stringify(allSheets)
    }));

  // console.log('webpackConfig: ', webpackConfig);
  webpack(
    webpackConfig,
    (err, stats) => {
      if (err || stats?.hasErrors()) {
        console.error(err || stats.toString());
      } else {
        console.log(stats.toString());
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

  const files = glob.sync(SHEETS_PATH + '/**/*.sheet.js');
  process.env.NODE_ENV = 'doc';
  // createSeparateSheets(files);
  compile(files);
}

main();