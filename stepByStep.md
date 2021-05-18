<!--
 * @Author: choma
 * @Date: 2021-05-18 14:12:39
 * @LastEditTime: 2021-05-18 17:02:34
 * @LastEditors: Please set LastEditors
 * @Description: vue3项目实践步骤
 * @FilePath: \choma-vue3-with-vite\stepByStep.md
-->

# 创建 vue3 项目

## 使用 vue-cli 创建

文档: https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

```javascript
// 安装或者升级
npm install -g @vue/cli
// 保证 vue cli 版本在 4.5.0 以上
vue --version
// 创建项目
vue create my-project
```

然后的步骤:
Please pick a preset - 选择 Manually select features
Check the features needed for your project - 选择上 TypeScript ，特别注意点空格是选择，点回车是下一步
Choose a version of Vue.js that you want to start the project with - 选择 3.x (Preview)
Use class-style component syntax - 直接回车
Use Babel alongside TypeScript - 直接回车
Pick a linter / formatter config - 直接回车
Use history mode for router? - 直接回车
Pick a linter / formatter config - 直接回车
Pick additional lint features - 直接回车
Where do you prefer placing config for Babel, ESLint, etc.? - 直接回车
Save this as a preset for future projects? - 直接回车

## 使用 vite 创建

文档: https://v3.cn.vuejs.org/guide/installation.html

vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，

它做到了 本地快速开发启动 , 在生产环境下基于 Rollup 打包。
快速的冷启动，不需要等待打包操作；
即时的热模块更新，替换性能和模块数量的解耦让更新飞起；
真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变。

```javascript
// 找到一个你要创建项目的文件夹下,右键Git Bash Here
npm init vite-app <project-name>
//  或 yarn create vite-app <choma-vue3-vite>
cd <project-name>
npm install
// 或 yarn
npm run dev
// 或 yarn dev
```

# 添加 vue3 模板代码块

```json
{
  "Print to console": {
    "prefix": "vue3",
    "body": [
      "<!-- $0 -->",
      "<template>",
      "  <div></div>",
      "</template>",
      "",
      "<script lang='ts'>",
      "import { reactive,toRefs,onBeforeMount,onMounted} from 'vue'",
      "interface DataProps {}",

      "export default {",
      "    name: '',",
      "      setup() {",
      "          console.log('1-开始创建组件-setup')",
      "          const data: DataProps = reactive({",
      "",
      "          })",
      "          onBeforeMount(() => {",
      "              console.log('2.组件挂载页面之前执行----onBeforeMount')",
      "          })",
      "          onMounted(() => {",
      "              console.log('3.-组件挂载到页面之后执行-------onMounted')",
      "          })",
      "          const refData = toRefs(data);",
      "          return {",
      "              ...refData,",
      "          }",
      "",
      "      }",
      "  };",
      "</script>",
      "<style scoped lang='stylus'>",
      "</style>"
    ],
    "description": "Log output to console"
  }
}
```

# 安装依赖

yarn add typescript -D
yarn add vue-router@4.0.0-beta7
yarn add vuex@next --save
yarn add stylus stylus-loader --dev (否则会报错)

```json
  "dependencies": {
    "vue-router": "^4.0.0-beta.7",
    "vuex": "4.0.0-beta.4"
  },
  "devDependencies": {
    "autoprefixer": "^10.1.0",
    "lib-flexible": "^0.3.2",
    "postcss-px-to-viewport": "^1.1.1",
    "postcss-px2rem": "^0.3.0",
    "stylus": "^0.54.8",
    "stylus-loader": "^4.3.1",
    "typescript": "^4.0.2",
  }


```

# 配置 typescript

## 安装 typescript

yarn add typescript -D

## 初始化 tsconfig.json

执行命令
npx tsc --init
目录下就生成了 tsconfig.json

## 将 js 改为 ts

将 main.js 修改为 main.ts,
将 index.html 里面的引用也修改为 main.ts,
需要修改 App.vue 与 HelloWorld.vue 文件，
修改方式如下

```html
<!--将 <script> 修改为 <script lang="ts">-->
<script lang="ts">
  import HelloWorld from "./components/HelloWorld.vue";
  export default {
    name: "App",
    components: {
      HelloWorld,
    },
  };
</script>
```

重启项目 会报错
:目录下新建 shim.d.ts 添加内容

```typescript
declare module "*.vue" {
  import { Component } from"vue";
  const component: Component;
  exportdefault component;
}


```

# 配置 vue-router

## 安装 vue-router

yarn add vue-router@4.0.0-beta7

## 配置 vue-router

### 创建 router

在项目 src 目录下面新建 router 目录，然后添加 index.ts 文件，在文件中添加以下内容

```typescript
import { createRouter, createWebHashHistory } from "vue-router";

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
      path: "/todolist",
      // 必须添加.vue后缀
      component: () => import("../views/todo-list.vue"),
    },
    {
      path: "/mapguide",
      component: () => import("../views/mapguide/index.vue"),
    },
    {
      path: "/",
      redirect: "/mapguide",
    },
  ],
});
```

与新的 Vue3.0 初始化方式发生变化一样，vue-router 的初始化方式也发生了变化，变成了通过 createRouter 来初始化路由。

### 将 router 引入到 main.ts 中

修改 main.ts 文件内容如下

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
// 添加touter的引入
import router from "./router/index";
//  createApp(App).mount('#app')
const app = createApp(App);
// 通过use 将 路由插件安装到 app 中
app.use(router);
app.mount("#app");
```

### App.vue 文件中<router-view />

```html
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
  export default {
    name: "App",
  };
</script>
```

# 配置 vuex

## 安装 vuex

yarn add vuex@4.0.0-beta.4

## 创建 store 文件夹

创建 index.ts 文件
添加内容

```typescript
import { createStore } from "vuex";

interface State {
  userName: string;
}

export default createStore({
  state(): State {
    return {
      userName: "choma",
    };
  },
});
```

## 引入到 main.ts 中

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";
import store from "./store/index";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
```
