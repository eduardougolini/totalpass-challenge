import { mount } from '@vue/test-utils';
import FooterSteps from '@/components/FooterSteps';

describe('FooterSteps.vue', () => {
  it('valida passo ativo do rodapé', () => {
    const wrapper = mount(FooterSteps, {
      propsData: {
        actualStep: 1,
      },
    });

    expect(wrapper.find('.dot.active').exists()).toBe(true);
  });

  it('valida rodapé sem passo ativo', () => {
    const wrapper = mount(FooterSteps, {
      propsData: {
        actualStep: 0,
      },
    });

    expect(wrapper.find('.dot.active').exists()).toBe(false);
  });
});
