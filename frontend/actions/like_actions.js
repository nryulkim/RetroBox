export const NEW_LIKE = "NEW_LIKE";
export const DESTROY_LIKE = "DESTROY_LIKE";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export function newLike(like) {
  return({
    type: NEW_LIKE,
    like
  });
}

export function receiveLike(like) {
  return({
    type: RECEIVE_LIKE,
    like
  });
}

export function destroyLike(id){
  return({
    type: DESTROY_LIKE,
    id
  });
}

export function removeLike(like){
  return({
    type: REMOVE_LIKE,
    like
  });
}
//
// export function getCount(){
//   return({
//     type: GET_COUNT,
//     likeable
//   });
// }
//
// export function getTotal(){
//   return({
//     type: GET_TOTAL,
//     likeable
//   });
// }
