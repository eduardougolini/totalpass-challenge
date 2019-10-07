import { mount } from '@vue/test-utils';
import RegisterHeader from '@/containers/RegisterHeader';

describe('RegisterHeader.vue', () => {
  it('valida renderização do container de cabeçalho', () => {
    const wrapper = mount(RegisterHeader);

    expect(wrapper.findAll('.header-box').exists()).toBe(true);
  });
});
