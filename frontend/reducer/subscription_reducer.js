import { RECEIVE_SUBSCRIPTIONS } from '../actions/subscription_actions';
import merge from "lodash/merge";

export default (state, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_SUBSCRIPTIONS:
      newState.currentUser = Object.assign({}, newState.currentUser, action.subscriptions);
      return newState;

    default:
      return newState;
  }
};
