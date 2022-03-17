import Vue from "vue";
import App from "./App";

import CreateUI from "../lib";
Vue.use(CreateUI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
