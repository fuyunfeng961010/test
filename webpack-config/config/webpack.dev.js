const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify('development') // 定义全局变量process.env.NODE_ENV值为development
    }),
  ]
})