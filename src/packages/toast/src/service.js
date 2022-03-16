import Vue from "vue";
import Toast from "./main";

let instances = [];

function ToastBox(data) {
  const ToastClass = Vue.extend(Toast);

  data.closeFunc = function () {
    ToastBox.close(instance);
  };

  let instance = new ToastClass({ data });
  instance.$mount();
  document.body.appendChild(instance.$el);

  let offset = data.offset || 20;
  instances.forEach((item) => {
    item.$data.offset += instance.$el.offsetHeight + offset;
  });
  instances.push(instance);
}

ToastBox.close = function (instance) {
  instances = instances.filter((item) => item !== instance);
};

["info", "success", "error", "warning"].forEach((type) => {
  ToastBox[type] = function (data) {
    if (typeof data === "string") {
      data = {
        type: type,
        offset: 20,
        content: data,
      };
    } else {
      data.type = type;
      data.offset = 20;
    }
    //整合data后再次去调用Message()
    return ToastBox(data);
  };
});

export default ToastBox;
