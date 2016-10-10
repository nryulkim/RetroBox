export const GET_COMMENTS = "GET_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const NEW_COMMENT = "NEW_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export function getComments(video_id) {
  return({
    type: GET_COMMENTS,
    video_id
  });
}

export function receiveComments(comments){
  return({
    type: RECEIVE_COMMENTS,
    comments
  });
}

export function newComment(comment, callback){
  return({
    type: NEW_COMMENT,
    comment,
    callback
  });
}

export function receiveComment(comment){
  return({
    type: RECEIVE_COMMENT,
    comment
  });
}

export function editComment(comment, callback){
  return({
    type: EDIT_COMMENT,
    comment,
    callback
  });
}

export function deleteComment(id){
  return({
    type: DELETE_COMMENT,
    id
  });
}

export function removeComment(comment){
  return({
    type: REMOVE_COMMENT,
    comment
  });
}
