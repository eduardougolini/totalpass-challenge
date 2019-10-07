import { createLocalVue, shallowMount } from '@vue/test-utils';
import RegisterAddressForm from '@/containers/RegisterAddressForm';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuelidate);

describe('RegisterAddressForm.vue', () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    actions = {
      fetchCepData: jest.fn(),
      loadBrazilianStates: jest.fn(),
      setAddressData: jest.fn(),
    };
    state = {
      addressData: {},
      brazilianStates: [],
    };
    store = new Vuex.Store({
      modules: {
        'total-pass': {
          namespaced: true,
          actions,
          state,
        },
      },
    });
  });

  it('valida renderização do container de registro de endereço', () => {
    const wrapper = shallowMount(RegisterAddressForm, {
      store,
      localVue,
    });

    expect(wrapper.findAll('.address-form').exists()).toBe(true);
  });
});
