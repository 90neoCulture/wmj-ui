const path = require('path')

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'site-mobile/mobile.js',
    }
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