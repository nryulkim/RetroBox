import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from "lodash/merge";

const defaultState = {
  currentUser: null,
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    uploadVideo: {errors: []},
    addComment: {errors: []}
  }
};


export default (state = defaultState, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return(merge({}, state, { currentUser: action.user, forms: {} }));

    case RECEIVE_ERRORS:
      return(merge({}, state, {
        currentUser: null,
        forms: {
          [action.formType]: { errors: action.errors }
        }
      }));

    case LOGOUT:
      return(merge({}, state, defaultState));

    default:
      return state;
  }
};
