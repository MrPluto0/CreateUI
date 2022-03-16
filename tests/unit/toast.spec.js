import Toast from "@/../packages/toast/src/main.vue";
import { createfactory } from "./utils/wrapper";

const factory = createfactory(Toast);

// global action for timers in this file
jest.useFakeTimers();

describe("Toast.vue", () => {
  it("render data.content when passed", () => {
    const data = {
      content: "你好",
    };
    const wrapper = factory({ data });

    expect(wrapper.find(".toast-wrapper").exists()).toBeTruthy();
    expect(wrapper.find(".toast-wrapper").text()).toMatch(data.content);
  });

  it("render default type when passed", () => {
    const data = {
      content: "你好",
    };
    const wrapper = factory({ data });
    expect(wrapper.find(".toast-wrapper").classes()).toContain("toast-success");
  });

  it("render other type when passed", () => {
    const data = {
      content: "你好",
      type: "error",
    };
    const wrapper = factory({ data });
    expect(wrapper.find(".toast-wrapper").classes()).toContain(
      "toast-" + data.type
    );
  });

  it("invoke method.close when ends", () => {
    const data = {
      content: "你好",
      duration: 500,
    };
    const wrapper = factory({ data });

    expect(wrapper.vm.closed).toBeFalsy();

    // Accelerate time / Time fast-forward
    setTimeout(() => {}, data.duration + 10);
    jest.runAllTimers();

    expect(wrapper.vm.closed).toBeTruthy();
  });

  it("change data.closed when passed", (done) => {
    const data = {
      content: "你好",
      duration: 500,
    };
    const wrapper = factory({ data });

    expect(wrapper.find(".toast-wrapper").exists()).toBeTruthy();

    wrapper.setData({ closed: true }).then(() => {
      expect(wrapper.find(".toast-wrapper").exists()).toBeFalsy();
      done();
    });
  });
});
