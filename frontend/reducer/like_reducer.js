import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const LikeReducer = (state, action) => {
  let newState = merge({}, state);
  let likes = [];

  if(newState.currentVideo.likes){
    likes = newState.currentVideo.likes;
  }
  if(action.like.likeable_type === "Comment"){
    let comment = newState.currentVideo.comments.find((comment) => {
      return comment.id === action.like.likeable_id;
    });
    if(comment){
      likes = comment.likes;
    }
  }
  let idx;
  if(likes){
    idx = likes.findIndex((like) => {
      if(like.id === action.like.id) { return true; }
      return false;
    });
  }else{
    idx = -2;
  }

  switch(action.type){
    case RECEIVE_LIKE:
      if(idx === -1){
        likes.push(action.like);
      }else if(idx >= 0){
        likes[idx] = action.like;
      }

      return newState;

    case REMOVE_LIKE:
      if(idx >= 0){
        likes.splice(idx, 1);
      }

      return newState;

    default:
      return newState;
  }
};

export default LikeReducer;
