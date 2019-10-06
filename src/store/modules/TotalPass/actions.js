import * as Mutations from './mutationTypes';

import ViacepService from '@/services/viacep.service';

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
};
