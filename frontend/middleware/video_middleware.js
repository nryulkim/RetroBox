import * as VideoApi from '../util/video_api_util';
import {
  ONE_VIDEO, ALL_VIDEOS, NEW_VIDEO, UPDATE_VIDEO, DELETE_VIDEO,
  receiveVideos, receiveVideo, removeVideo
} from '../actions/video_actions';
import { receiveErrors } from '../actions/util_actions.js'

export default ({ getState, dispatch }) => next => action => {
  let success = video => {
    action.cb();
    dispatch(receiveVideo(video));
  };
  let errors = xhr => {
    console.log(xhr.responseJSON);
  };

  switch(action.type) {
    case(ONE_VIDEO):
      VideoApi.fetchVideo(action.id, success, errors)
      return next(action);

    case(ALL_VIDEOS):
      success = videos => {
        dispatch(receiveVideos(videos));
      }
      VideoApi.fetchAllVideos(success, errors);
      return next(action);

    case(NEW_VIDEO):
      errors = xhr => {
        dispatch(receiveErrors(xhr.responseJSON, "uploadVideo"))
      };
      VideoApi.newVideo(action.video, success, errors);
      return next(action);

    case(UPDATE_VIDEO):
      errors = xhr => {
        dispatch(receiveErrors(xhr.responseJSON, "updateVideo"))
      };
      VideoApi.editVideo(action.video, success, errors);
      return next(action);

    case(DELETE_VIDEO):
      success = (video) => {
        dispatch(removeVideo(video))
      }
      VideoApi.destroyVideo(action.id, success, errors);
      return next(action);

    default:
      return next(action);
  }
};
