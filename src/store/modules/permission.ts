import { Module, MutationTree, ActionTree } from 'vuex'
import RootStateTypes from '@/store/interface'
import { RouterType, constantRoutes } from '@/router'

export interface permissionType {
  routes: RouterType[]
}

const state: permissionType = {
  routes: ([] as unknown) as RouterType[],
}

const mutations: MutationTree<permissionType> = {
  SET_ROUTES: (state: permissionType, routes: RouterType[]) => {
    state.routes = constantRoutes.concat(routes)
  },
}

const actions: ActionTree<permissionType, RootStateTypes> = {
  setToken({ commit }, val) {
    commit('SET_TOKEN', val)
  },
}

const permission: Module<permissionType, RootStateTypes> = {
  state,
  mutations,
  actions,
}

export default permission
