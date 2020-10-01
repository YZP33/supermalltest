import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 高德离线地图
import "./plugin/aMap"


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
	