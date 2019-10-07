import { createLocalVue, shallowMount } from '@vue/test-utils';
import RegisterDataForm from '@/containers/RegisterDataForm';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuelidate);

describe('RegisterDataForm.vue', () => {
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

  it('valida renderização do container de registro de dados básicos', () => {
    const wrapper = shallowMount(RegisterDataForm, {
      store,
      localVue,
    });

    expect(wrapper.findAll('.basic-data-form').exists()).toBe(true);
  });
});
