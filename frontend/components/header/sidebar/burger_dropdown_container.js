import { connect } from 'react-redux';
import Burger from './burger_dropdown';
import { getSubscriptions } from '../../../actions/subscription_actions';

const mapStateToProps = (state, props) => {
  const { session } = state;
  const { path } = props;
  return({
    currentUser: session.currentUser,
    path: path
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    getSubscriptions: (id) => dispatch(getSubscriptions(id))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Burger);
