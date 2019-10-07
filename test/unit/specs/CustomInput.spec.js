import { mount } from '@vue/test-utils';
import CustomInput from '@/components/CustomInput';

describe('CustomInput.vue', () => {
  it('valida input', () => {
    const wrapper = mount(CustomInput, {
      propsData: {
        name: 'input',
        inputType: 'text',
        value: '',
      },
    });

    expect(wrapper.contains('input')).toBe(true);
    expect(wrapper.contains('select')).toBe(false);
  });

  it('valida select', () => {
    const wrapper = mount(CustomInput, {
      propsData: {
        name: 'select',
        inputType: 'select',
        value: '',
        selectOptions: [
          {
            name: '',
            value: '',
            attributes: 'disabled selected',
          },
        ],
      },
    });

    expect(wrapper.contains('select')).toBe(true);
    expect(wrapper.contains('input')).toBe(false);
  });
});
