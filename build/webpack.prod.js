/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/l-track.[hash:8].js',
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            collapse_vars: true,
            reduce_vars: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../env/production.env'), // Path to .env file (this is the default)
      safe: false, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
  ],
});
