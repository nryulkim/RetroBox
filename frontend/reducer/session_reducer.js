import { RECEIVE_CURRENT_USER,  LOGOUT } from '../actions/session_actions';
import { RECEIVE_SUBSCRIPTIONS } from '../actions/subscription_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/util_actions';
import SubscriptionReducer from './subscription_reducer';
import merge from "lodash/merge";


const defaultForms = {
  signUp: {errors: []},
  logIn: {errors: []},
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
      if(["signUp", "logIn"].includes(action.formType)){
        newState.forms = merge({}, defaultForms, {
          [action.formType]: { errors: action.errors }
        });
      }
      return newState;

    case LOGOUT:
      return defaultState;

    case RECEIVE_SUBSCRIPTIONS:
      newState = SubscriptionReducer(state, action);
      return newState;

    default:
      return state;
  }
};
