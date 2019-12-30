/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  plugins: [
    // 每次的打包的时候删除上一次打包dist里的文件
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../'), // 根目录
      verbose: true, // 开启在控制台输出信息
      dry: false, // 启用删除文件
    }),
  ],
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
