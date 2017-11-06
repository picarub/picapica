const path = require('path')
let webpack = require('webpack')


module.exports = {
 entry: {
  v: './src/index.js'
 },
 output: {
  path: path.join(__dirname, 'res'),
  filename: '[name].js'
 },
 module: {
  loaders: [
   {
    test: /\.js[x]?$/,
    loader: 'babel-loader',
    exclude: /node_modules/
   },
   {
    test: /\.vue$/,
   	loader: 'vue-loader'   	
   }
  ]
 },
 watch:false
}
