import * as CommentApi from '../util/comment_api_util';
import {
  GET_COMMENTS, NEW_COMMENT, EDIT_COMMENT, DELETE_COMMENT,
  receiveComments, receiveComment, updateComment, removeComment
} from '../actions/comment_actions';
import { receiveErrors } from '../actions/util_actions.js';

export default ({ getState, dispatch }) => next => action => {
  let success = comment => {
    if(action.callback){ action.callback(); }
    dispatch(receiveComment(comment));
  };
  let errors = xhr => {
    dispatch(receiveErrors(xhr.responseJSON, "newComment"))
  };

  switch(action.type){
    case(NEW_COMMENT):
      CommentApi.newComment(action.comment, success, errors);
      return next(action);

    case(EDIT_COMMENT):
      errors = xhr => {
        dispatch(receiveErrors(xhr.responseJSON, "editComment"))
      };
      CommentApi.editComment(action.comment, success, errors);
      return next(action);

    case(DELETE_COMMENT):
      success = comment => {
        dispatch(removeComment(comment))
      }
      CommentApi.destroyComment(action.id, success, errors);
      return next(action);

    default:
      return next(action);
  }
}
