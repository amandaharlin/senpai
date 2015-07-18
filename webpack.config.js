'use strict';

var path = require('path');


module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'assets/', // relative path for github pages
    filename: 'index.js', // no hash in main.js because index.html is a static page
    chunkFilename: '[hash]/js/[id].js',
    hotUpdateMainFilename: '[hash]/update.json',
    hotUpdateChunkFilename: '[hash]/js/[id].update.js'
  }
};
