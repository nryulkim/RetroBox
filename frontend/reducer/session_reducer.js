import { RECEIVE_CURRENT_USER,  LOGOUT } from '../actions/session_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/util_actions';
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
