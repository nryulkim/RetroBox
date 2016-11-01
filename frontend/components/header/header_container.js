import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = (state, props) => {
  const { session } = state;
  const { toggleBurger } = props;
  return({
    currentUser: session.currentUser,
    toggleBurger
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Header);
