import { ONE_VIDEO, receiveVideo } from '../actions/video_actions';
import Cache from '../util/lru_cache';
import { fetchVideo } from '../util/video_api_util';

const videoCache = new Cache();

export default ({ getState, dispatch }) => next => action => {
  let success = video => {
    videoCache.add(video);
    if(action.cb){ action.cb(); }
    dispatch(receiveVideo(video));
  };

  switch(action.type) {
    case(ONE_VIDEO):
      const video = videoCache.get(action.id);
      if(video){
        videoCache.add(video);
        dispatch(receiveVideo(video));
        break;
      }else{
        fetchVideo(action.id, success);
        return next(action);
      }

    default:
      return next(action);
  }
};
