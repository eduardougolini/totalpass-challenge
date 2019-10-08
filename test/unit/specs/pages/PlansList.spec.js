import { createLocalVue, shallowMount } from '@vue/test-utils';
import PlansList from '@/pages/PlansList';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuelidate);

describe('PlansList.vue', () => {
  let getters;
  let actions;
  let store;

  beforeEach(() => {
    getters = {
      getRandomGif: () => jest.fn(),
    };
    actions = {
      loadGymGifs: () => jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        'total-pass': {
          namespaced: true,
          actions,
          getters,
        },
      },
    });
  });

  it('valida renderização da página de listagem de planos', () => {
    const wrapper = shallowMount(PlansList, {
      store,
      localVue,
    });

    expect(wrapper.findAll('.plans-list').exists()).toBe(true);
  });
});
