const path = require('path');

module.exports = {
  mode: 'production', // 'development',
  // entry: ["@babel/polyfill", path.resolve(__dirname, 'index.js')],
  entry: [path.resolve(__dirname, 'index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
