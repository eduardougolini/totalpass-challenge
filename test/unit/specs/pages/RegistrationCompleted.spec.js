import { mount } from '@vue/test-utils';
import RegistrationCompleted from '@/pages/RegistrationCompleted';

describe('RegistrationCompleted.vue', () => {
  it('valida renderização da página de finalização do cadastro', () => {
    const wrapper = mount(RegistrationCompleted);

    expect(wrapper.findAll('.registration-completed').exists()).toBe(true);
  });
});
