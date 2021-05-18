/*
 * @Author: your name
 * @Date: 2021-05-18 15:52:28
 * @LastEditTime: 2021-05-18 16:08:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \choma-vue3-with-vite\shim.d.ts
 */
declare module "*.vue" {
  import { Component } from"vue";
  const component: Component;
  exportdefault component;
}
