export const GET_SUBSCRIPTIONS = "GET_SUBSCRIPTIONS";
export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";

export function getSubscriptions(id){
  return({
    type: GET_SUBSCRIPTIONS,
    id
  });
}

export function receiveSubscriptions(subscriptions){
  return({
    type: RECEIVE_SUBSCRIPTIONS,
    subscriptions
  });
}
