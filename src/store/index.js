import Vue from 'vue';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';

import modules from './modules';

const state = {};

Vue.use(Vuex);
Vue.use(Vuelidate);

const store = new Vuex.Store({
  strict: true,
  state,
  modules,
});

export default store;
