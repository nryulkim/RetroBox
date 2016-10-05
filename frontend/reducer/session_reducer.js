import { CLEAR_ERRORS, RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from "lodash/merge";


const defaultForms = {
  signUp: {errors: []},
  logIn: {errors: []},
  addComment: {errors: []}
};

const defaultState = {
  currentUser: null,
  forms: defaultForms
};

export default (state = defaultState, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case CLEAR_ERRORS:
      newState.forms = defaultForms;
      return newState;

    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      newState.forms = defaultForms;
      return newState;

    case RECEIVE_ERRORS:
      newState.currentUser = null;
      newState.forms = merge({}, defaultForms, {
        [action.formType]: { errors: action.errors }
      });
      return newState;

    case LOGOUT:
      return defaultState;

    default:
      return state;
  }
};
