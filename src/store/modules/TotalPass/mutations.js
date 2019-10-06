import * as Types from './mutationTypes';

export default {
  [Types.SET_USER_IMAGE](state, image) {
    state.userData.image = image;
  },
};
