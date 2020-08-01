import Vue from "vue";
// 1.引入Composition API模块
import VueCompositionApi from '@vue/composition-api'
import App from "./App.vue";
import router from "./router/index";
import "./router/premit.js";
import store from "./store/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 2.不要漏了显式调用 VueCompositionApi
Vue.use(VueCompositionApi)
//引入饿了么UI
Vue.use(ElementUI);
//自定义全局组件SVG
import '@/icons/index.js'
//引用自定义的全局方法
import global from './utils/global'
Vue.use(global)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
