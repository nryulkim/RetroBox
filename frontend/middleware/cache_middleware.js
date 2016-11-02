import { ONE_VIDEO, receiveVideo } from '../actions/video_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { fetchVideo } from '../util/video_api_util';
import { getIndex, getLikeIndex } from '../util/util_functions';
import Cache from '../util/lru_cache';

const videoCache = new Cache();

function getVideoId(like){
  let id = like.likeable_id;
  if(like.likeable_type === "Comment"){
    id = like.likeable.video_id;
  }
  return id;
}

function getLikes(like, video){
  let likes;
  if(like.likeable_type === "Video"){
    likes = video.likes;
  }else{
    const comment = video.comments(getIndex(video.comments, like.likeable));
    likes = comment.likes;
  }
  return likes;
}

function setUpLikes(like, cb){
  const video_id = getVideoId(like);

  const node = videoCache.get(video_id);
  if(node){
    const video = node.val;
    let likes = getLikes(like, video);

    likes = likes || [];
    const idx = getLikeIndex(likes, like.id);
    cb(likes, idx);
  }
}

export default ({ getState, dispatch }) => next => action => {
  let success = video => {
    videoCache.add(video);
    if(action.cb){ action.cb(); }
    dispatch(receiveVideo(video));
  };
  let video;
  let node;
  let idx;

  switch(action.type) {
    case(ONE_VIDEO):
      node = videoCache.get(action.id);
      if(node){
        video = node.val;
        videoCache.add(video);
        dispatch(receiveVideo(video));
        break;
      }else{
        fetchVideo(action.id, success);
        return next(action);
      }

    case(RECEIVE_COMMENT):
      node = videoCache.get(action.comment.video_id);
      if(node){
        video = node.val;
        idx = getIndex(video.comments, action.comment);
        if(idx !== -1){
          video.comments[idx] = action.comment;
        }else{
          video.comments.unshift(action.comment);
        }
      }
      return next(action);

    case(REMOVE_COMMENT):
      node = videoCache.get(action.comment.video_id);
      debugger
      if(node){
        idx = getIndex(node.val.comments, action.comment)
        node.val.comments.splice(idx, 1);
      }
      return next(action);

    case(RECEIVE_LIKE):
      setUpLikes(action.like, (likes, idx) => {
        if(idx === -1){
          likes.push(action.like);
        }else{
          likes[idx] = action.like;
        }
      });

      return next(action);

    case(REMOVE_LIKE):
      setUpLikes(action.like, (likes, idx) => {
        likes.splice(idx, 1);
      })
      return next(action);


    default:
      return next(action);
  }
};
