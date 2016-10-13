import { RECEIVE_VIDEOS, RECEIVE_SOME_VIDEOS, RECEIVE_VIDEO } from '../actions/video_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/util_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

import LikeReducer from './like_reducer';
import merge from "lodash/merge";


const defaultForms = {
  uploadVideo: {errors: []},
  updateVideo: {errors: []}
};

const defaultState = {
  currentVideo: null,
  forms: defaultForms
};

function getIndex(comments, comment){
  return comments.findIndex((cmt) => {
    if(cmt.id === comment.id){ return true; }
    return false;
  });
}

const VideoReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  let idx = null;
  if(action.comment){
    idx = getIndex(newState.currentVideo.comments, action.comment);
  }

  switch(action.type){
    case CLEAR_ERRORS:
      newState.forms = defaultForms;
      return newState;

    case RECEIVE_VIDEO:
      newState.currentVideo = action.video;
      newState.forms = defaultForms;
      return newState;

    case RECEIVE_VIDEOS:
      newState.list_videos = action.videos.list_videos;
      newState.forms = defaultForms;
      return newState;

    case RECEIVE_SOME_VIDEOS:
      newState.searched_videos = action.videos.list_videos;
      newState.forms = defaultForms;
      return newState;

    case RECEIVE_LIKE:
      newState = LikeReducer(state, action);
      return newState;

    case REMOVE_LIKE:
      newState = LikeReducer(state, action);
      return newState;


    // case REMOVE_VIDEO:
    //   if(newState.currentVideo && newState.currentVideo.id === action.video.id){
    //     newState.currentVideo = null;
    //   }
    //   if(newState[action.video.id]){
    //     delete newState[action.video.id];
    //   }
    //   return newState;

    case RECEIVE_COMMENT:
      if(idx !== -1){
        newState.currentVideo.comments[idx] = action.comment;
      }else{
        newState.currentVideo.comments.unshift(action.comment);
      }
      return newState;

    case REMOVE_COMMENT:
      newState.currentVideo.comments.splice(idx, 1);
      return newState;

    case RECEIVE_ERRORS:
      if(["uploadVideo", "updateVideo"].includes(action.formType)){
        newState.forms = merge({}, defaultForms, {
          [action.formType]: { errors: action.errors }
        });
      }
      return newState;

    default:
      return state;
  }
};

export default VideoReducer;
