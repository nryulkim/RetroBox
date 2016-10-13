import * as SubscriptionAPI from '../util/subs_api_util';
import { GET_SUBSCRIPTIONS, receiveSubscriptions } from '../actions/subscription_actions';

export default ({ getState, dispatch }) => next => action => {
  switch(action.type){
    case GET_SUBSCRIPTIONS:
      let success = (subscriptions) => {
        dispatch(receiveSubscriptions(subscriptions))
      };

      SubscriptionAPI.getSubscriptions(action.id, success);
      return next(action);

    default:
      return next(action);
  }

}
