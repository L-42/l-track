/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/l-track.js',
    chunkFilename: '[name].bundle.js',
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../env/dev.env'), // Path to .env file (this is the default)
      safe: false, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
  ],
});
