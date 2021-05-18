/*
 * @Author: choma
 * @Date: 2021-05-18 16:18:51
 * @LastEditTime: 2021-05-18 16:19:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \choma-vue3-with-vite\src\router\index.ts
 */
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
