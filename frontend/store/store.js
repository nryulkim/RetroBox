import { createStore } from 'redux';
import RootReducer from '../reducer/root_reducer';
import RootMiddleware from '../middleware/root_middleware';
import merge from 'lodash/merge';

const _default = {
  session:{
    currentUser: null,
    forms: {
      signUp: {errors: []},
      logIn: {errors: []},
      addComment: {errors: []}
    }
  },
  videos:{
    currentVideo: null,
    forms:{
      uploadVideo: {errors: []},
      updateVideo: {errors: []}
    }
  }
}

export default (state = {}) => {
  state = merge(_default, state);


  return createStore(
    RootReducer,
    state,
    RootMiddleware
  );
};
