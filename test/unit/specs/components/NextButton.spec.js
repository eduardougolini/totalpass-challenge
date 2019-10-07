import { mount } from '@vue/test-utils';
import NextButton from '@/components/NextButton';

describe('FooterSteps.vue', () => {
  it('valida clique no botão de avançar', () => {
    const wrapper = mount(NextButton);

    wrapper.find('button').trigger('click');

    expect(wrapper.emitted('clicked-forward-button')).toBeTruthy();
  });
});
