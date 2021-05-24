/*
 * @Author: choma
 * @Date: 2021-05-18 18:30:34
 * @LastEditTime: 2021-05-19 09:02:24
 * @LastEditors: Please set LastEditors
 * @Description: store
 * @FilePath: \choma-vue3-with-vite\src\store\index.ts
 */
import { createStore } from 'vuex'


interface State {
  userName: string
}


export default createStore({
  state(): State {
    return {
      userName: "虫子",
    };
  },
});
