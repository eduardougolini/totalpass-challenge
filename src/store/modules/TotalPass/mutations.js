import Vue from 'vue';

import * as Types from './mutationTypes';

export default {
  [Types.SET_USER_IMAGE](state, image) {
    state.userData.image = image;
  },
  [Types.SET_REGISTER_DATA](state, data) {
    state.userData = {
      ...state.userData,
      ...data,
    };
  },
  [Types.SET_ADDRESS_DATA](state, data) {
    for (const [key, value] of Object.entries(data)) {
      Vue.set(state.addressData, key, value);
    }
  },
};
