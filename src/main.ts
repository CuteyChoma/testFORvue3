/*
 * @Author: choma
 * @Date: 2021-05-18 14:10:56
 * @LastEditTime: 2021-05-18 17:01:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \choma-vue3-with-vite\src\main.ts
 */

import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";
import store from "./store/index";

const app = createApp(App);
// 通过use 将 路由插件安装到 app 中
app.use(router);
app.use(store);
app.mount("#app");
