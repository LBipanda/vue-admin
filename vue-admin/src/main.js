import Vue from "vue";
// 1.引入Composition API模块
import VueCompositionApi from '@vue/composition-api'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 2.不要漏了显式调用 VueCompositionApi
Vue.use(VueCompositionApi)
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
