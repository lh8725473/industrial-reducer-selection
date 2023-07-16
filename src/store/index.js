import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breadcrumbList: []
  },
  getters: {
    breadcrumbList: (state) => state.breadcrumbList
  },
  mutations: {
    Toggle_Breadcrumb: (state, breadcrumbList) => {
      state.breadcrumbList = breadcrumbList
    }
  },
  actions: {
    togglebreadcrumb (context, breadcrumbList) {
      context.commit('Toggle_Breadcrumb', breadcrumbList)
    }
  },
  modules: {
  }
})
