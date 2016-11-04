import * as VideoApi from '../util/video_api_util';
import {
  ALL_VIDEOS, SOME_VIDEOS, NEW_VIDEO,
  receiveVideos, receiveVideo, receiveSomeVideos
} from '../actions/video_actions';
import { receiveErrors } from '../actions/util_actions.js';

export default ({ getState, dispatch }) => next => action => {
  let success = video => {
    if(action.cb){ action.cb(); }
    dispatch(receiveVideo(video));
  };
  let errors = xhr => {
  };

  switch(action.type) {
    case(ALL_VIDEOS):
      success = videos => {
        dispatch(receiveVideos(videos));
      }
      VideoApi.fetchAllVideos(success, errors);
      return next(action);

    case(SOME_VIDEOS):
      success = videos => {
        dispatch(receiveSomeVideos(videos));
      }
      VideoApi.fetchSomeVideos(action.filter, success, errors);
      return next(action);

    case(NEW_VIDEO):
      errors = xhr => {
        dispatch(receiveErrors(xhr.responseJSON, "uploadVideo"));
      };
      VideoApi.newVideo(action.video, success, errors);
      return next(action);

    default:
      return next(action);
  }
};
