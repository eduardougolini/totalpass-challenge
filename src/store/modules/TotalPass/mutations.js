/* eslint-disable no-restricted-syntax */
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
    /* eslint-disable no-unused-vars */
    for (const [key, value] of Object.entries(data)) {
      Vue.set(state.addressData, key, value);
    }
  },
  [Types.SET_GYM_GIFS](state, data) {
    state.gymGifs = data;
  },
  [Types.SET_BRAZILIAN_STATES](state, data) {
    data.geonames.forEach((element) => {
      state.brazilianStates.push({
        name: element.adminCodes1.ISO3166_2,
        value: element.adminCodes1.ISO3166_2,
      });
    });
  },
};
