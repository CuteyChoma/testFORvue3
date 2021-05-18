import { Module, MutationTree, ActionTree } from 'vuex'
import RootStateTypes from '@/store/interface'

export interface userState {
  Token: String
}

const state: userState = {
  Token: '123456',
}

const mutations: MutationTree<userState> = {
  SET_TOKEN: (state: userState, Token: String) => {
    state.Token = Token
  },
}

const actions: ActionTree<userState, RootStateTypes> = {
  setToken({ commit }, val) {
    commit('SET_TOKEN', val)
  },
}

const user: Module<userState, RootStateTypes> = {
  state,
  mutations,
  actions,
}

export default user
