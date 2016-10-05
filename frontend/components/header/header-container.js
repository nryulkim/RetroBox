import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = ({ session }) => {
  return({
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps, mapDispatchToProps
)(Header);
