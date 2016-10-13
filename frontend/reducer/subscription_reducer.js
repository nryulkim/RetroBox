import {
  RECEIVE_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION
} from '../actions/subscription_actions';
import merge from "lodash/merge";

export default (state, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_SUBSCRIPTIONS:
      newState.subscriptions = action.subscriptions;
      return newState;

    case RECEIVE_SUBSCRIPTION:
      newState.subscriptions.push(action.subscription);
      return newState;

    case REMOVE_SUBSCRIPTION:
      const idx = newState.subscriptions.findIndex((subscription) => {
        return subscription.id === action.id;
      });
      newState.subscriptions.splice(idx, 1);

      return newState;

    default:
      return newState;
  }
};
