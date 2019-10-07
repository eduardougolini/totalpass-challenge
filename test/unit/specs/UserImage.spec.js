import { createLocalVue, shallowMount } from '@vue/test-utils';
import UserImage from '@/components/UserImage';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UserImage.vue', () => {
  let state;
  let actions;
  let store;

  beforeEach(() => {
    state = {
      userData: {},
    };
    actions = {
      setUserImage: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        'total-pass': {
          namespaced: true,
          state,
          actions,
        },
      },
    });
  });

  it('valida renderização da imagem do usuário', () => {
    const wrapper = shallowMount(UserImage, {
      store,
      localVue,
    });

    expect(wrapper.find('.user-image').exists()).toBe(true);
  });
});
