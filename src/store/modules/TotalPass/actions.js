import * as Mutations from './mutationTypes';

import ViacepService from '@/services/viacep.service';
import GiphyService from '@/services/giphy.service';
import GeonamesService from '@/services/geonames.service';

export default {
  setUserImage({ commit }, image) {
    commit(Mutations.SET_USER_IMAGE, image);
  },
  setRegisterData({ commit }, data) {
    commit(Mutations.SET_REGISTER_DATA, data);
  },
  async fetchCepData(context, cep) {
    try {
      const { data } = await ViacepService.getCepInfo(cep);

      return data;
    } catch (e) {
      console.error(`Falha ao trazer dados do cep ${cep}`, e);
    }

    return {};
  },
  setAddressData({ commit }, data) {
    commit(Mutations.SET_ADDRESS_DATA, data);
  },
  async loadGymGifs({ commit }) {
    try {
      const { data } = await GiphyService.fetchGifs('gym');

      commit(Mutations.SET_GYM_GIFS, data);
    } catch (e) {
      console.error('Falha ao trazer gifs aleatórios', e);
    }
  },
  async loadBrazilianStates({ commit }) {
    try {
      const { data } = await GeonamesService.fetchBrazilianStates();

      commit(Mutations.SET_BRAZILIAN_STATES, data);
    } catch (e) {
      console.error('Falha ao trazer estados brasileiros', e);
    }
  },
};
