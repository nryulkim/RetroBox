import * as SubscriptionAPI from '../util/subs_api_util';
import {
  GET_SUBSCRIPTIONS, NEW_SUBSCRIPTION, DELETE_SUBSCRIPTION, RECEIVE_SUBSCRIPTION, REMOVE_SUBSCRIPTION,
  receiveSubscriptions, receiveSubscription, removeSubscription
} from '../actions/subscription_actions';

export default ({ getState, dispatch }) => next => action => {
  let success;
  switch(action.type){
    case GET_SUBSCRIPTIONS:
      success = (subscriptions) => {
        dispatch(receiveSubscriptions(subscriptions));
      };

      SubscriptionAPI.getSubscriptions(action.id, success);
      return next(action);

    case NEW_SUBSCRIPTION:
      success = (subscription) => {
        dispatch(receiveSubscription(subscription));
      };

      SubscriptionAPI.newSubscription(action.subscription, success);
      return next(action);

    case REMOVE_SUBSCRIPTION:
    case RECEIVE_SUBSCRIPTION:
      const currState = getState();
      if(currState.session.currentUser.subscriptions){
        return next(action);
      }else{
        success = (subscriptions) => {
          dispatch(receiveSubscriptions(subscriptions));
        }
        SubscriptionAPI.getSubscriptions(currState.session.currentUser.id, success);
        break;
      }

    case DELETE_SUBSCRIPTION:
      success = (id) => {
        dispatch(removeSubscription(id));
      };

      SubscriptionAPI.destroySubscription(action.id, success);
      return next(action);

    default:
      return next(action);
  }
};
