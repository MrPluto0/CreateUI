import Modal from "@/../packages/modal/src/main.vue";
import Vue from "vue";
import { createfactory } from "./utils/wrapper";

const factory = createfactory(Modal);

describe("Modal.vue", () => {
  it("render data.content when passed", () => {
    const data = {
      content: "你好",
    };
    const wrapper = factory({ data });

    expect(wrapper.find(".modal-content").text()).toMatch(data.content);
  });

  it("invoke callback when click confirm button", async () => {
    const data = {
      content: "你好",
      success: jest.fn(),
    };
    const wrapper = factory({ data });

    await wrapper.find(".confirm-btn").trigger("click");

    expect(data.success).toHaveBeenCalled();
  });

  it("invoke callback when click confirm button", async () => {
    const data = {
      content: "你好",
      success: jest.fn(),
    };
    const wrapper = factory({ data });

    await wrapper.find(".cancel-btn").trigger("click");

    expect(data.success).not.toHaveBeenCalled();
  });

  it("render closed when invoke clickHandler", (done) => {
    const data = {
      content: "你好",
    };
    const wrapper = factory({ data });

    wrapper.vm.clickHandler();

    Vue.nextTick(() => {
      expect(wrapper.vm.isShow).toBeFalsy();
      expect(wrapper.find(".modal-wrapper").exists()).toBeFalsy();
      done();
    });
  });
});
