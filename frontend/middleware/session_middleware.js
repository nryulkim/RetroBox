import * as SessionAPI from '../util/session_api_util';
import {
  LOGIN, LOGOUT, SIGNUP,
  receiveCurrentUser, receiveErrors
} from '../actions/session_actions';

export default ({ getState, dispatch }) => next => action => {
  const success = user => {
    action.cb();
    dispatch(receiveCurrentUser(user))
  };
  let errors;

  switch(action.type) {
    case(LOGIN):
      errors = xhr => {
        dispatch(receiveErrors(xhr.responseJSON, "logIn"))
      };

      SessionAPI.login(action.user, success, errors);
      return next(action);

    case(LOGOUT):
      SessionAPI.logout(() => { next(action) });
      break;

    case(SIGNUP):
      errors = xhr => {
        dispatch(receiveErrors(xhr.responseJSON, "signUp"))
      };

      SessionAPI.signup(action.user, success, errors);
      return next(action);

    default:
      return next(action);
  }
};
