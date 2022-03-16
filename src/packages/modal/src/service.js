import Modal from "./main";
import Vue from "vue";

export default function ModalBox(data) {
  const ModalClass = Vue.extend(Modal);

  let instance = new ModalClass({ data });
  instance.$mount();
  document.body.appendChild(instance.$el);
}
