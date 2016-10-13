export const GET_SUBSCRIPTIONS = "GET_SUBSCRIPTIONS";
export const NEW_SUBSCRIPTION = "NEW_SUBSCRIPTION";
export const DELETE_SUBSCRIPTION = "DELETE_SUBSCRIPTION";
export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";
export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION";


export function getSubscriptions(id){
  return({
    type: GET_SUBSCRIPTIONS,
    id
  });
}

export function newSubscription(subscription){
  return({
    type: NEW_SUBSCRIPTION,
    subscription
  });
}

export function deleteSubscription(id){
  return({
    type: DELETE_SUBSCRIPTION,
    id
  });
}

export function receiveSubscriptions(subscriptions){
  return({
    type: RECEIVE_SUBSCRIPTIONS,
    subscriptions
  });
}

export function receiveSubscription(subscription){
  return({
    type: RECEIVE_SUBSCRIPTION,
    subscription
  });
}

export function removeSubscription(sub){
  return({
    type: REMOVE_SUBSCRIPTION,
    id: sub.id
  });
}
