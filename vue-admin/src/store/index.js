import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapse: false,
  },
  getters:{},
  mutations: {
    SET_COLLAPSE(state,value){
      state.collapse = !state.collapse
    }
  },
  actions: {},
  modules: {}
});
