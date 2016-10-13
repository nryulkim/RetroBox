import * as LikeApi from '../util/like_api_util';
import {
  NEW_LIKE, DESTROY_LIKE,
  receiveLike, removeLike
} from '../actions/like_actions';

export default ({ getState, dispatch }) => next => action => {
  let success
  const errors = () => {};
  switch(action.type){
    case(NEW_LIKE):
      success = (like) => {
        dispatch(receiveLike(like));
      }
      LikeApi.newLike(action.like, success, errors, action.isAsync);
      return next(action);

    case(DESTROY_LIKE):
      success = (like) => {
        dispatch(removeLike(like))
      }
      LikeApi.destroyLike(action.id, success, errors, action.isAsync);
      return next(action);

    default:
      return next(action);
  }
}
