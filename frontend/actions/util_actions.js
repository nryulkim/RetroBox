export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export function clearErrors(){
  return({
    type: CLEAR_ERRORS
  });
}

export function receiveErrors(errors, formType){
  return({
    type: RECEIVE_ERRORS,
    errors,
    formType
  });
}
