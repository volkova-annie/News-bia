const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'static')
  },
  module: {
     rules: [
       {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
       },
       {
         test: /\.css$/,
         loader: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: [
             'css-loader',
             'postcss-loader'
           ]
         })
       }
     ]
   },
   plugins: [
     new ExtractTextPlugin({
       filename: '[name].css',
       disable: false,
       allChunks: true
     }),
     new webpack.ProvidePlugin({
       fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
       EventSource: 'imports-loader?this=>global!exports-loader?global.EventSource!event-source-polyfill',
     }),
   ]
};
