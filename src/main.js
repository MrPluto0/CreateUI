import Vue from "vue";
import App from "./App.vue";

import CreateUI from "packages";
Vue.use(CreateUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
