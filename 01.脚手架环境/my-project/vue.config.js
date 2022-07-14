// vue.config.js
const { defineConfig } = require('@vue/cli-service')
console.log('vue.config')
module.exports = defineConfig({
  // 选项
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: false, //关闭语法检查

  //开启代理服务器（方式一）
  // devServer: {
  //   proxy: {
  //     '/students': {
  //       target: 'http://localhost:5000',
  //       ws: true,
  //       changeOrigin: false,
  //       pathRewrite: {'^/s' : ''}
  //     }
  //   }
  // },
})