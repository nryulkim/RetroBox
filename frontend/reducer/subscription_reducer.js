import {
  RECEIVE_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION
} from '../actions/subscription_actions';
import merge from "lodash/merge";

export default (state, action) => {
  let newState = merge({}, state);
  let idx;
  switch(action.type){
    case RECEIVE_SUBSCRIPTIONS:
      newState.subscriptions = action.subscriptions;
      return newState;

    case RECEIVE_SUBSCRIPTION:
      idx = newState.subscriptions.findIndex((sub) => {
        return sub.channel_id === action.subscription.channel_id;
      });
      if(idx === -1){
        newState.subscriptions.push(action.subscription);
      }
      return newState;

    case REMOVE_SUBSCRIPTION:
      idx = newState.subscriptions.findIndex((subscription) => {
        return subscription.id === action.id;
      });
      if(idx !== -1){
        newState.subscriptions.splice(idx, 1);
      }

      return newState;

    default:
      return newState;
  }
};
