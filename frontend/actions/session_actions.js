export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export function login(user, clrForm){
  return({
    type: LOGIN,
    user,
    clrForm
  });
}

export function clearErrors(){
  return({
    type: CLEAR_ERRORS
  });
}

export function logout(){
  return({
    type: LOGOUT
  });
}

export function signup(user, clrForm){
  return({
    type: SIGNUP,
    user,
    clrForm
  });
}

export function receiveCurrentUser(user){
  return({
    type: RECEIVE_CURRENT_USER,
    user
  });
}

export function receiveErrors(errors, formType){
  return({
    type: RECEIVE_ERRORS,
    errors,
    formType
  });
}
