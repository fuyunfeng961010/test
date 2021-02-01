module.exports = {
  publicPath: '',
  outputDir: '../www',
  productionSourceMap: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      css: {},
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
