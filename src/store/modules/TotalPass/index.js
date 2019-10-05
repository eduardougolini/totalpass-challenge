import Vue from 'vue';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  userData: {
    image: '',
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
