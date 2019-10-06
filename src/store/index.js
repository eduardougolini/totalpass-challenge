import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

const state = {};

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state,
  modules,
});

export default store;
