import Toast from "./toast";
import Modal from "./modal";

// 组件列表
const components = [];

const requireComponents = require.context("./", true, /index\.js$/);

requireComponents.keys().forEach((key) => {
  components.push(requireComponents(key).default);
});

//组件注册
const install = function (Vue) {
  // 遍历并注册所有组件
  components.forEach((component) => {
    let hasName = !!component?.name;
    if (hasName) {
      Vue.component(component.name, component);
    }
  });

  // 服务注册
  Vue.prototype.$toast = Toast;
  Vue.prototype.$modal = Modal;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

//导出全局install
export default {
  install,
  ...components,
};
