vue3使用
## ①搭建步骤
```
[链接](https://mp.weixin.qq.com/s?__biz=MzU2MzUyODkwMA==&mid=2247484417&idx=1&sn=7414b25c570cf8b4dce87389de10200e&chksm=fc5991aacb2e18bcebfd40c387a5b7ac261ad979a2a5df9c4dc3bb57fad245aaf164c627e333&scene=126&sessionid=1598241233&key=b82f1b249fc3af4dcd1b042782e0a89bd3990a6e61274f92ded41a360d9a85286df63ecb6f8da466e85030f76870c93610cf14f52aba5ccf58ca6f711e9addd7fd42f3d2234fb4e090ee92eb0c4f0db23ddf1c6520ab3e0e9515e6141eb739eeba20975c23ce690b912bb95896ef8be326a5966298d16bf1e1c43c1f1a7cc035&ascene=1&uin=MTUxMDAxNjExNA%3D%3D&devicetype=Windows+10+x64&version=62090538&lang=zh_CN&exportkey=AZrd%2FMl4rgZD0v4NKNexfKg%3D&pass_ticket=lm%2BmgbdVpOpyiVkn6P0Osj45F2Z2v0TvyRGlnzgbZPUwYYUmVQMhE983m2PPru4y)
    使用vite初始化Vue3.0项目
    配置ts
    配置vue-router
    配置vuex
    使用Vue3.0开发一个TodoList示例
```

## ②路由
### 1.hash 路由
```
import {createRouter, createWebHashHistory} from 'vue-router' //hash模式

export default createRouter({
    // history: createWebHashHistory(), //hash模式
    // 路由地址****````****
    routes: [{
        path: '/todolist',
        // 必须添加.vue后缀
        component: () => import('../views/todo-list.vue')
    }, {
        path: '/mapguide',
        component: () => import('../views/mapguide/index.vue')
    },{
        path:'/',
        redirect:'/mapguide'
    }]
})
```


### 2.history
```
import {createRouter, createWebHistory} from 'vue-router'; //history 模式

export default createRouter({
    history: createWebHistory(process.env.BASE_URL), //history 模式
    // 路由地址
    routes: [{
        path: '/todolist',
        // 必须添加.vue后缀
        component: () => import('../views/todo-list.vue')
    }, {
        path: '/mapguide',
        component: () => import('../views/mapguide/index.vue')
    },{
        path:'/',
        redirect:'/mapguide'
    }]
})

```

## 移动端适配

### 安装css预处理器 stylus stylus-loader

### 方案一安装依赖 autoprefixer  postcss-px-to-viewport

```
// 注意:安装在devDependencies中 不要安装到dependencies中,否则会报错的:
 yarn add ... --dev
//  [vite] Dep optimization failed with error:                                                    
//  Could not resolve './lib-cov/stylus' from  ./lib-cov/stylus?commonjs-external

"dependencies": {
    "vue": "^3.0.0-rc.1",
    "vue-router": "^4.0.0-beta.7",
    "vuex": "4.0.0-beta.4"
  },
  "devDependencies": {
    "@vue/compiler-sfc": "^3.0.0-rc.1",
    "typescript": "^4.0.2",
    "vite": "^1.0.0-rc.1",
    "autoprefixer": "^10.1.0",
    "postcss-px-to-viewport": "^1.1.1",
    "stylus": "^0.54.8",
    "stylus-loader": "^4.3.1"
  }

  // 在vue.config.js文件中配置
```

### 方案二 安装依赖 lib-flexible  postcss-px2rem 
```
  // 注意:styl样式引入的时候绝对路径"~@"表示
  "devDependencies": {
    "lib-flexible": "^0.3.2",
     "postcss-px-to-viewport": "^1.1.1",
     "postcss-px2rem": "^0.3.0",
   }

  // 在vue.config.js文件中配置
  const px2rem = require('postcss-px2rem')
  // 配置postcs-px2rem
  const postcss = px2rem({
    remUnit: 37.5   //设计稿十等分 基准大小 baseSize，需要和rem.js中单位rem值占比一样相同  remUnit为转换rem的基础 设计稿单位/等分数 = remUnit
  })
  let path = require('path');
  function resolve(dir) {
    return path.join(__dirname, dir)
  }
    
  module.exports={
    configureWebpack: { // 当前配置需要写入该选项中
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': resolve('src'), // 设置文件查找路径，可简写文件查找路径
        }
      }
    },
    runtimeCompiler:true,
    lintOnSave:false,
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
  }
    // main.ts下引入
  import 'lib-flexible/flexible'
 import './assets/stylus/reset.styl' // 用相对路径 不要用@/


```
