import Chatbox from "./src/main";

Chatbox.install = function (Vue) {
  Vue.component(Chatbox.name, Chatbox);
};

export default Chatbox;
