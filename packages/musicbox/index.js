import Musicbox from "./src/main";

Musicbox.install = function (Vue) {
  Vue.component(Musicbox.name, Musicbox);
};

export default Musicbox;
