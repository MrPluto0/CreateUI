import Musicbox from "./src/main";

const components = {
  install(Vue) {
    Vue.component(Musicbox.name, Musicbox);
  },
};

export default components;
