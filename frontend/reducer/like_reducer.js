import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const LikeReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  let likes = newState.currentVideo.likes;
  if(action.like.likeable_type === "Comment"){
    let comment = newState.currentVideo.comments.find((comment) => {
      return comment.id === action.like.likeable_id;
    });
    likes = comment.likes;
  }
  const idx = likes.findIndex((like) => {
    if(like.id === action.like.id) { return true; }
    return false;
  });

  switch(action.type){
    case RECEIVE_LIKE:
      if(idx !== -1){
        likes[idx] = action.like;
      }else{
        likes.push(action.like);
      }

      return newState;

    case REMOVE_LIKE:
      if(idx !== -1){
        likes.splice(idx, 1);
      }

      return newState;

    default:
      return newState;
  }
};

export default LikeReducer;
