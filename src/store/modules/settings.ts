import { Module, MutationTree, ActionTree } from 'vuex'
import RootStateTypes from '@/store/interface'
import defaultSettings from '@/settings'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

export interface settingsState {
  [index: string]: boolean
  showSettings: boolean
  tagsView: boolean
  fixedHeader: boolean
  sidebarLogo: boolean
}

const state: settingsState = {
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo,
}

const mutations: MutationTree<settingsState> = {
  CHANGE_SETTING: (state: settingsState, { key, value }: { key: string; value: boolean }) => {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = value
    }
  },
}

const actions: ActionTree<settingsState, RootStateTypes> = {
  setToken({ commit }, val) {
    commit('SET_TOKEN', val)
  },
}

const settings: Module<settingsState, RootStateTypes> = {
  state,
  mutations,
  actions,
}

export default settings
