import { connect } from 'react-redux';
import {
  newSubscription, deleteSubscription, getSubscriptions,
  receiveSubscription, removeSubscription
} from '../../../../actions/subscription_actions';

import SubButton from './sub_button';

const mapStateToProps = ({ session }, ownProps) => {
  return({
    currentUser: session.currentUser,
    channel: ownProps.channel
  });
};

function mapDispatchToProps(dispatch){
  return({
    getSubscriptions: (id) => dispatch(getSubscriptions(id)),
    newSubscription: (subscription) => dispatch(newSubscription(subscription)),
    deleteSubscription: (id) => dispatch(deleteSubscription(id)),
    receiveSubscription: (subscription) => dispatch(receiveSubscription(subscription)),
    removeSubscription: (id) => dispatch(removeSubscription(id))
  });
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SubButton);
