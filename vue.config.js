const path = require('path')

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'site-mobile/mobile.js',
    }
  },
  devServer: {
    port: 9090, // 端口号
    host: '0.0.0.0', // 'localhost'
    open: true, //配置自动启动浏览器
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/style/*.scss')   // css所在目录
      ]
    }
  },
  productionSourceMap: true,
}