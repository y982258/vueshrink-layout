import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false
  },
  mutations: {
    // 折叠侧边栏
    TOGGLE_SIDEBAR(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
})
