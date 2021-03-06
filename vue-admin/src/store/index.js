import Vue from "vue";
import Vuex from "vuex";

import appStore from './modules/appStore';
import loginStore from './modules/loginStore';
import commonStore from './modules/commonStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appStore,
    loginStore,
    commonStore
  }
});
