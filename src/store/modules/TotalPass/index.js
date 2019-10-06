import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  userData: {
    image: '',
    name: '',
    cpf: '',
    phone: '',
  },
  addressData: {
    cep: '',
    address: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
