import Cookies from 'js-cookie'

import { Module, MutationTree, ActionTree } from 'vuex'
import RootStateTypes from '@/store/interface'

export interface appState {
  sidebar: { opened: boolean; withoutAnimation: boolean }
  device: string
  size?: string
}

const state: appState = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+(Cookies.get('sidebarStatus') as string) : true,
    withoutAnimation: false,
  },
  device: 'desktop',
  size: Cookies.get('size') || 'medium',
}

const mutations: MutationTree<appState> = {
  TOGGLE_SIDEBAR: (state: appState) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', '1')
    } else {
      Cookies.set('sidebarStatus', '0')
    }
  },
  CLOSE_SIDEBAR: (state: appState, withoutAnimation: boolean) => {
    Cookies.set('sidebarStatus', '0')
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state: appState, device: string) => {
    state.device = device
  },
  SET_SIZE: (state: appState, size: string) => {
    state.size = size
    Cookies.set('size', size)
  },
}

const actions: ActionTree<appState, RootStateTypes> = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  },
}

const app: Module<appState, RootStateTypes> = {
  state,
  mutations,
  actions,
}

export default app
