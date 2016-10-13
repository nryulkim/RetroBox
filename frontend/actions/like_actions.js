export const NEW_LIKE = "NEW_LIKE";
export const DESTROY_LIKE = "DESTROY_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export function newLike(like, isAsync) {
  return({
    type: NEW_LIKE,
    like,
    isAsync
  });
}

export function receiveLike(like) {
  return({
    type: RECEIVE_LIKE,
    like
  });
}

export function destroyLike(id, isAsync){
  return({
    type: DESTROY_LIKE,
    id,
    isAsync
  });
}

export function removeLike(like){
  return({
    type: REMOVE_LIKE,
    like
  });
}
