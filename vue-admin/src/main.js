import Vue from "vue";
// 1.引入Composition API模块
import VueCompositionApi from '@vue/composition-api'
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 2.不要漏了显式调用 VueCompositionApi
Vue.use(VueCompositionApi)
Vue.use(ElementUI);
//自定义全局组件
import '@/icons/index.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
