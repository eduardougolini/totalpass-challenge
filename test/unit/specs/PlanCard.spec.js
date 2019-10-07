import { createLocalVue, shallowMount } from '@vue/test-utils';
import PlanCard from '@/components/PlanCard';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('PlanCard.vue', () => {
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

  it('valida renderização do card de plano', () => {
    const wrapper = shallowMount(PlanCard, {
      store,
      localVue,
      propsData: {
        title: 'title',
        subtitle: 'subtitle',
        description: 'description',
        planValue: '100',
      },
    });

    const valueInfo = wrapper.find('.value-info');

    expect(valueInfo.text()).toBe('R$ 100 / MÊS');
  });
});
