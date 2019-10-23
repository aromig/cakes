import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "@/App";
import cakesJSON from "@/cakes.json";

const localVue = createLocalVue();

describe("App", () => {
  test("each object imported from cakes.json should contain the correct properties", () => {
    const images = [...cakesJSON];
    images.forEach(image => {
      expect(image).toHaveProperty("imageUrl");
      expect(image).toHaveProperty("thumbUrl");
      expect(image).toHaveProperty("caption");
    });
  });

  test("If images array is empty, gallery is also empty", () => {
    const wrapper = shallowMount(App, { localVue, directives: { lazy: {} } });
    wrapper.setData({ images: [] });
    expect(wrapper.find("#gallery").contains(".gallery__image")).toBe(false);
  });

  test("If images array is not empty, gallery should populate", () => {
    const wrapper = shallowMount(App, { localVue, directives: { lazy: {} } });
    wrapper.setData({ images: [...cakesJSON] });
    expect(wrapper.find("#gallery").contains(".gallery__image")).toBe(true);
  });

  test("showImage() should update imageIndex value", () => {
    const wrapper = shallowMount(App, { localVue, directives: { lazy: {} } });
    wrapper.setData({ imageIndex: null });
    wrapper.vm.showImage(1);
    expect(wrapper.vm.imageIndex).toEqual(1);
  });
});
