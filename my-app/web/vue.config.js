const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '',
  outputDir: '../www',
  productionSourceMap: true,
  lintOnSave: false,

  // chainWebpack: config => {
  //   // config.devtool = 'inline-source-map'
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  //     .set('assets', resolve('src/assets'))
  //     .set('api', resolve('src/api'))
  //     .set('components', resolve('src/components'));
  // },

  configureWebpack: config => {
    config.devtool = 'source-map'
  },

  // css: {
  //   // sourceMap: true,
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-pxtorem')({
  //           rootValue: 16, // 设计稿尺寸为1080
  //           propList: ['*'],
  //           exclude: /node_modules/i
  //         }),
  //         require('autoprefixer')
  //       ]
  //     }
  //   }
  // },

  // pluginOptions: {
  //   // 'style-resources-loader': {
  //   //   preProcessor: 'less',
  //   //   patterns: [resolve('src/assets/style/var.less'), resolve('src/assets/style/mixin.less')] // 引入全局样式变量
  //   // },
  //   // i18n: {
  //   //   locale: 'zh',
  //   //   fallbackLocale: 'zh',
  //   //   localeDir: 'locales',
  //   //   enableInSFC: false
  //   // }
  // },

  // // 接口代理
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.242.34:8080/gdsinsp/app/',
  //       changeOrigin: true,
  //       ws: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
};
