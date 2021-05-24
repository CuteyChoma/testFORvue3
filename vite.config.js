/*
 * @Author: your name
 * @Date: 2021-05-24 12:02:06
 * @LastEditTime: 2021-05-24 14:10:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \choma-vue3-with-vite\vite.config.js
 */
const path = require('path')
// vite.config.js # or vite.config.ts
console.log(path.resolve(__dirname, './src'))

module.exports = {
  server: {
    host: '0.0.0.0',
    port: 5002,
    proxy: {
      // 如果是 /lsbdb 打头，则访问地址如下
      // '/lsbdb': 'http://10.192.195.96:8087',
      // 如果是 /lsbdb 打头，则访问地址如下
      // '/lsbdb': {
      //   target: 'http://10.192.195.96:8087/',
      //   changeOrigin: true,
      //   // rewrite: path => path.replace(/^\/lsbdb/, '')
      // }
    }
  },
}
