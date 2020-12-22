const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // 指定入口文件
  entry: {
    entry: './src/index.js',   // 打包输出的chunk名为entry
    entry2: './src/index2.js'  // 打包输出的chunk名为entry2
  },
  output: {
    /**
     * 输出文件名称
     * [name] 意为根据入口文件的名称，打包成对应名称的 JS 文件 entry.js 和 entry2.js
     */
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 51200,//50k
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: path.join(__dirname, '..', 'src'),
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"], "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'entry.html',
      /**
       * 如果没有配置，那么生成的 HTML 会引入所有入口 JS 文件
       * vendor 是指提取涉及 node_modules 中的公共模块；
       * manifest 是对 vendor 模块做的缓存；
       */
      chunks: ['manifest', 'vendor', 'entry']
    }),
    new HtmlWebpackPlugin({
      template: 'public/index2.html',
      filename: 'entry2.html',
      chunks: ['manifest', 'vendor', 'entry2']
    }),
  ],
};