import * as Mutations from './mutationTypes';

export default {
  setUserImage({ commit }, image) {
    commit(Mutations.SET_USER_IMAGE, image);
  },
  setRegisterData({ commit }, data) {
    commit(Mutations.SET_REGISTER_DATA, data);
  },
};
