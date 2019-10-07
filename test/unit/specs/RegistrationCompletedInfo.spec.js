import { mount } from '@vue/test-utils';
import RegistrationCompletedInfo from '@/components/RegistrationCompletedInfo';

describe('RegistrationCompletedInfo.vue', () => {
  it('valida renderização do componente de finalização do cadastro', () => {
    const wrapper = mount(RegistrationCompletedInfo);

    expect(wrapper.findAll('.info-box').exists()).toBe(true);
  });
});
