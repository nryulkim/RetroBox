import { ONE_VIDEO, receiveVideo } from '../actions/video_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
// import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { fetchVideo } from '../util/video_api_util';
import { getIndex } from '../util/util_functions';
import Cache from '../util/lru_cache';

const videoCache = new Cache();

export default ({ getState, dispatch }) => next => action => {
  let success = video => {
    videoCache.add(video);
    if(action.cb){ action.cb(); }
    dispatch(receiveVideo(video));
  };
  let video;
  let idx;

  switch(action.type) {
    case(ONE_VIDEO):
      video = videoCache.get(action.id);
      if(video){
        video = video.val;
        videoCache.add(video);
        dispatch(receiveVideo(video));
        break;
      }else{
        fetchVideo(action.id, success);
        return next(action);
      }

    case(RECEIVE_COMMENT):
      video = videoCache.get(action.comment.video_id);
      if(video){
        idx = getIndex(video.val.comments, action.comment)
        if(idx !== -1){
          video.val.comments[idx] = action.comment;
        }else{
          video.val.comments.unshift(action.comment);
        }
      }
      return next(action);

    case(REMOVE_COMMENT):
      video = videoCache.get(action.comment.video_id);
      debugger
      if(video){
        idx = getIndex(video.val.comments, action.comment)
        video.val.comments.splice(idx, 1);
      }
      return next(action);

    case(RECEIVE_LIKE):
      return next(action);

    default:
      return next(action);
  }
};
