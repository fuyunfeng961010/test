module.exports = {
  publicPath: '',
  outputDir: '../www',
  productionSourceMap: true,
  // eslint 终端不打印
  lintOnSave: false,
  css: {
    loaderOptions: {
      css: {},
      // 全局公共变量引入
      stylus: {
        import: '~@/assets/style/varibles.styl'
      },
      // rem单位转换
      postcss: {
        plugins: [
          require('postcss-px2rem-exclude')({
            remUnit: 37.5,
            exclude: /node_modules/i
          })
        ]
      }
    }
  }
}
