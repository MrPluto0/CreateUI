import { shallowMount } from "@vue/test-utils";

export function createfactory(component) {
  return ({ props = {}, data = {} }) => {
    return shallowMount(component, {
      propsData: props,
      data() {
        return {
          ...data,
        };
      },
    });
  };
}
