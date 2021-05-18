import { Module, MutationTree, ActionTree } from 'vuex'
import RootStateTypes from '@/store/interface'

export interface errorLogState {
  logs: { [k: string]: any }[]
}

const state: errorLogState = {
  logs: [],
}

const mutations: MutationTree<errorLogState> = {
  ADD_ERROR_LOG: (state: errorLogState, log: any) => {
    state.logs.push(log)
  },
  CLEAR_ERROR_LOG: (state: errorLogState) => {
    state.logs.splice(0)
  },
}

const actions: ActionTree<errorLogState, RootStateTypes> = {
  setToken({ commit }, val) {
    commit('SET_TOKEN', val)
  },
}

const errorLog: Module<errorLogState, RootStateTypes> = {
  state,
  mutations,
  actions,
}

export default errorLog
