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
};
