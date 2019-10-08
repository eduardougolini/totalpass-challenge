import { createLocalVue, shallowMount } from '@vue/test-utils';
import BasicDataRegister from '@/pages/BasicDataRegister';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuelidate);

describe('BasicDataRegister.vue', () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    actions = {
      setRegisterData: jest.fn(),
    };
    state = {
      userData: {},
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

  it('valida renderização da página de registro de dados básicos', () => {
    const wrapper = shallowMount(BasicDataRegister, {
      store,
      localVue,
    });

    expect(wrapper.findAll('.basic-register').exists()).toBe(true);
  });
});
