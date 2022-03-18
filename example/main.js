import Vue from "vue";
import App from "./App";

import CreateUI from "../packages";
Vue.use(CreateUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
