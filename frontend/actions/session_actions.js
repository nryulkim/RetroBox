export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export function login(user, cb){
  return({
    type: LOGIN,
    user,
    cb
  });
}

export function logout(){
  return({
    type: LOGOUT
  });
}

export function signup(user, cb){
  return({
    type: SIGNUP,
    user,
    cb
  });
}

export function receiveCurrentUser(user){
  return({
    type: RECEIVE_CURRENT_USER,
    user
  });
}
