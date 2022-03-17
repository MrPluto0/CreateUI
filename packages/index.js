import Toast from "./toast";
import Modal from "./modal";
import Chatbox from "./chatbox";
import Loading from "./loading";
import loading from "./loading";

// 组件列表
const components = [Chatbox];

/* The following can't work after bundle */
// const requireComponents = require.context("", true, /index\.js$/);
// requireComponents.keys().forEach((key) => {
//   if (key !== "./index.js") components.push(requireComponents(key).default);
// });

// register components
const install = function (Vue) {
  components.forEach((component) => {
    let hasName = !!component?.name;
    if (hasName) {
      Vue.component(component.name, component);
    }
  });

  // directive
  Vue.use(loading.directive);

  // service
  Vue.prototype.$toast = Toast;
  Vue.prototype.$modal = Modal;
  Vue.prototype.$loading = Loading.service;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

//导出全局install
export default {
  install,
  ...components,
  Toast,
  Modal,
  Loading,
};
