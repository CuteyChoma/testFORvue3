import { createStore, Store, useStore as baseUseStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { InjectionKey } from 'vue'
import { AllStateTypes } from './interface'
import getters from './getters'

// 索引
interface moduleType {
  [index: string]: any
}

// 批量导入vuex模块
const files: moduleType = import.meta.globEager('./modules/*.ts')

const modules: moduleType = {}

Object.keys(files).forEach(key => {
  modules[key.replace(/(\.\/modules[/]|\.ts)/g, '')] = files[key].default
})

Object.keys(modules).forEach(key => {
  modules[key].namespaced = true
})

const store = createStore<AllStateTypes>({
  //  vuex持久化
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  modules,
  getters,
})

export const StoreKey: InjectionKey<Store<AllStateTypes>> = Symbol('vue-store')

export function useStore() {
  return baseUseStore(StoreKey)
}

export default store
