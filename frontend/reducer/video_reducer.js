import {
  RECEIVE_VIDEOS, RECEIVE_VIDEO, RECEIVE_ERRORS, CLEAR_ERRORS, REMOVE_VIDEO
} from '../actions/video_actions';
import merge from "lodash/merge";


const defaultForms = {
  uploadVideo: {errors: []},
  updateVideo: {errors: []}
};

const defaultState = {
  currentVideo: null,
  forms: defaultForms
};

export default (state = defaultState, action) => {
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
      newState = merge({}, newState, action.videos);
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
