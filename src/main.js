import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 高德离线地图
import "./plugin/aMap";
import "./components/back";
// element UI 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';

Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
	