import { shallowMount, createLocalVue } from '@vue/test-utils';
import PlanSlider from '@/components/PlanSlider';

const localVue = createLocalVue();

describe('PlanSlider.vue', () => {
  it('valida renderização do carousel', () => {
    const wrapper = shallowMount(PlanSlider, {
      localVue,
    });

    expect(wrapper.findAll('.slider').exists()).toBe(true);
  });
});
