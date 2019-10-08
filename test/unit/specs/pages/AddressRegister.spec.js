import { createLocalVue, shallowMount } from '@vue/test-utils';
import AddressRegister from '@/pages/AddressRegister';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuelidate);

describe('AddressRegister.vue', () => {
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

  it('valida renderização da página de registro de endereço', () => {
    const wrapper = shallowMount(AddressRegister, {
      store,
      localVue,
    });

    expect(wrapper.findAll('.address-register').exists()).toBe(true);
  });
});
