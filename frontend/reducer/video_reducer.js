import {
  RECEIVE_VIDEOS, RECEIVE_VIDEO,  REMOVE_VIDEO
} from '../actions/video_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/util_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import merge from "lodash/merge";


const defaultForms = {
  uploadVideo: {errors: []},
  updateVideo: {errors: []}
};

const defaultState = {
  currentVideo: null,
  forms: defaultForms
};

const VideoReducer = (state = defaultState, action) => {
  let newState = merge({}, state);

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

    case REMOVE_VIDEO:
      if(newState.currentVideo && newState.currentVideo.id === action.video.id){
        newState.currentVideo = null;
      }
      if(newState[action.video.id]){
        delete newState[action.video.id];
      }
      return newState;

    case RECEIVE_COMMENT:
      newState.currentVideo.comments.unshift(action.comment);
      return newState;

    case REMOVE_COMMENT:
      const idx = newState.currentVideo.comments.findIndex((comment) => {
        if(comment.id === action.comment.id){ return true; }
        return false;
      });
      newState.currentVideo.comments.splice(idx, 1);
      return newState;

    case RECEIVE_ERRORS:
      newState.currentUser = null;
      newState.forms = merge({}, defaultForms, {
        [action.formType]: { errors: action.errors }
      });
      return newState;

    default:
      return state;
  }
};

export default VideoReducer;
