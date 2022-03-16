import Chatbox from "@/../packages/chatbox";
import { createfactory } from "./utils/wrapper";

const factory = createfactory(Chatbox);

describe("Chatbox.vue", () => {
  it("renders props.text when passed", () => {
    const props = {
      text: ["你好", "你叫什么", "你喜欢我吗"],
    };
    const wrapper = factory({ props });
    const textArrWrapper = wrapper.findAll(".ct-chatbox__msg");

    for (let i = 0; i < textArrWrapper.length; i++) {
      const text = textArrWrapper.at(i).text();
      expect(text).toMatch(props.text[i]);
    }
  });

  it("renders props.name/stamp when passed", () => {
    const props = {
      text: ["你好"],
      name: "Gypsophlia",
      stamp: "Two minutes ago",
    };
    const wrapper = factory({ props });

    expect(wrapper.find(".ct-chatbox__name").exists()).toBeTruthy();
    expect(wrapper.find(".ct-chatbox__name").text()).toMatch(props.name);
    expect(wrapper.find(".ct-chatbox__stamp").exists()).toBeTruthy();
    expect(wrapper.find(".ct-chatbox__stamp").text()).toMatch(props.stamp);
  });

  it("renders props.avatar when passed", () => {
    const props = {
      text: ["你好"],
      avatar:
        "https://avatars.githubusercontent.com/u/54534553?s=400&u=05ae11f6517aef111a98bb14ac2a4f0158dc8edd&v=4",
    };
    const wrapper = factory({ props });

    expect(wrapper.find(".ct-chatbox__avatar img").exists()).toBeTruthy();
    expect(wrapper.find(".ct-chatbox__avatar img").attributes("src")).toBe(
      props.avatar
    );
  });

  // 当你的测试运行在 jsdom 中时，只能探测到内联样式。
  it.skip("renders props.bgColor when passed", () => {
    const props = {
      text: ["你好"],
      bgColor: "#111111",
    };
    const wrapper = factory({ props });

    console.log(wrapper.element.style); // {empty}
    // expect(wrapper.element.style["--bg-color"]).toMatch(props.bgColor);
  });
});
