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
      // postcss: {
      //   plugins: [
      //     require('postcss-px2rem-exclude')({
      //       remUnit: 37.5,
      //       exclude: /node_modules/i
      //     })
      //   ]
      // },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75,
            propList: ['*'], // 是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
            // unitPrecision: 6, //保留rem小数点多少位
            selectorBlackList: ['.van'] // 则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
            // replace: true,
            // mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
            // minPixelValue: 2, //px小于2的不会被转换
          })
        ]
      }
    }
  }
}
