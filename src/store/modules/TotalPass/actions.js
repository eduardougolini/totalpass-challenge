import * as Mutations from './mutationTypes';

export default {
  setUserImage({ commit }, image) {
    commit(Mutations.SET_USER_IMAGE, image);
  },
};
