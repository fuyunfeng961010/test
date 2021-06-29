// const WebpackAliyunOss  = require('webpack-aliyun-oss-plugin')
// module.exports = {
//   publicPath: 'http://oss.fuyunfeng.top/',
//   configureWebpack: config => {
//     if (process.env.NODE_ENV === 'production') {
//       return {
//         plugins: [new WebpackAliyunOss({
//           buildPath: ['./dist/**'],//排除html文件
//           region: 'oss-cn-shanghai',
//           ak: '',
//           sk: '',
//           bucket: 'fuyf-test'
//         })]
//       }
//     } else {
//       // 为开发环境修改配置...
//     }
//   }
// }
