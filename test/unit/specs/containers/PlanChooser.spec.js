import { createLocalVue, shallowMount } from '@vue/test-utils';
import PlanChooser from '@/containers/PlanChooser';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('PlanChooser.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      getRandomGif: () => jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        'total-pass': {
          namespaced: true,
          getters,
        },
      },
    });
  });

  it('valida renderização do container de seleção de plano', () => {
    const wrapper = shallowMount(PlanChooser, {
      store,
      localVue,
    });

    expect(wrapper.findAll('.plan-info').exists()).toBe(true);
  });
});
