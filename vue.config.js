const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
    remUnit: 37.5   //设计稿十等分 基准大小 baseSize，需要和rem.js中单位rem值占比一样相同  remUnit为转换rem的基础 设计稿单位/等分数 = remUnit
})

let path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {// 当前配置需要写入该选项中
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'), // 设置文件查找路径，可简写文件查找路径
            }
        }
    },
    runtimeCompiler: true,
    lintOnSave: false,
    productionSourceMap: false,
    css: { // 添加postcss配置
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },

    // chainWebpack: (config) => {
    //     //忽略的打包文件
    //     config.externals({
    //         'vue': 'Vue',
    //         'vue-router': 'VueRouter',
    //         'vuex': 'Vuex',
    //         'axios': 'axios',
    //         'element-ui': 'ELEMENT',
    //     })
    // },
    // devServer: {
    //   // 端口配置
    //   port: 1888,
    //   disableHostCheck: true,
    //   // 反向代理配置
    //   proxy: {
    //     '/api': {
    //       //测试
    //       // target: '', //http://192.168.0.225:8000/omc
    //       ws: true,
    //       pathRewrite: {
    //         '^/api': '/'
    //       }
    //     },
    //     '/foo': {
    //       //测试
    //       // target: 'http://192.168.0.114:8000/omc', //http://192.168.0.106:8000jun
    //       ws: true,
    //       pathRewrite: {
    //         '^/foo': '/'
    //       }
    //     }
    //   }
    // }
}



/*

// 'use strict'
// const path = require('path')
const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const name = '虫子的vue3学习' // 标题
// function resolve(dir) {
//     return path.join(__dirname, dir)
// }
// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档
module.exports = {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
    // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
    // publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
    // outputDir: 'dist',
    // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    // assetsDir: 'static',
    // 是否开启eslint保存检测，有效值：ture | false | 'error'
    // lintOnSave: process.env.NODE_ENV === 'development',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    // productionSourceMap: false,
    // webpack-dev-server 相关配置
    // devServer: {
    //     host: '0.0.0.0',
    //     port: '8080',
    //     proxy: {
    //         [process.env.VUE_APP_BASE_API]: {
    //             target: `http://192.168.0.240:8091`,
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 ['^' + process.env.VUE_APP_BASE_API]: ''
    //             }
    //         }
    //     },
    //     disableHostCheck: true
    // },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtoviewport({
                        viewportWidth: 375
                    })
                ]
            },
            stylus: {
                import: '@/reset.stylus'
            }
        }
    },

    resolve: {
        alias: {
            '@': resolve('src'),
        },
    },
    // configureWebpack: {
    //     name: name,
    //     output: {
    //         sourcePrefix: ' '
    //     },
    //     amd: {
    //         toUrlUndefined: true
    //     },
    //     resolve: {
    //         alias: {
    //             '@': resolve('src')
    //         }
    //     }
    // },
    // chainWebpack(config) {
    //     config.plugins.delete('preload') // TODO: need test
    //     config.plugins.delete('prefetch') // TODO: need test
    //
    //     // set svg-sprite-loader
    //     config.module
    //         .rule('svg')
    //         .exclude.add(resolve('src/assets/icons'))
    //         .end()
    //     config.module
    //         .rule('icons')
    //         .test(/\.svg$/)
    //         .include.add(resolve('src/assets/icons'))
    //         .end()
    //         .use('svg-sprite-loader')
    //         .loader('svg-sprite-loader')
    //         .options({
    //             symbolId: 'icon-[name]'
    //         })
    //         .end()
    //
    //     // set preserveWhitespace
    //     config.module
    //         .rule('vue')
    //         .use('vue-loader')
    //         .loader('vue-loader')
    //         .tap(options => {
    //             options.compilerOptions.preserveWhitespace = true
    //             return options
    //         })
    //         .end()
    //
    //     config
    //         // https://webpack.js.org/configuration/devtool/#development
    //         .when(process.env.NODE_ENV === 'development',
    //             config => config.devtool('cheap-source-map')
    //         )

    // }
}
*/
