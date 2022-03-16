import Loading from "@/../packages/loading/src/loading.vue";
import { createfactory } from "./utils/wrapper";

const factory = createfactory(Loading);

describe("Loading.vue", () => {
  it("render loading.txt when passed", () => {
    const data = {
      text: "你好，加载中",
    };
    const wrapper = factory({ data });

    expect(wrapper.find(".ct-loading__title").text()).toMatch(data.text);
  });

  it("render spinner when passed", () => {
    const data = {
      text: "你好",
      spinner: "iconfont-xxx",
    };
    const wrapper = factory({ data });

    expect(wrapper.find(".ct-loading__spinner").classes()).toContain(
      data.spinner
    );
  });

  it("render animeStyle when passed", () => {
    const data = {
      text: "你好",
      animeStyle: "moon",
    };
    const wrapper = factory({ data });

    expect(wrapper.find(".ct-loading-box > div").classes()).toContain(
      "ct-loading-anime__" + data.animeStyle
    );
  });
});
