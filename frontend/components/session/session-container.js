import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session';

const mapStateToProps = ({ session }, ownProps) => {
  let formType = "logIn";
  if(ownProps.route.path === "sign-up"){
    formType = "signUp";
  }

  return({
    loggedIn: !!session.currentUser,
    errors: session.forms[formType]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let method = "Log In";
  let actionCreator = login;

  if(ownProps.route.path === "sign-up"){
    method = "Sign Up";
    actionCreator = signup;
  }

  return({
    formType: method,
    process: (user, clrForm) => dispatch(actionCreator(user, clrForm))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(SessionForm);
