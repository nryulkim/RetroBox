import { connect } from 'react-redux';
import Searchbar from './searchbar';
import { someVideos } from '../../../actions/video_actions';

function mapStateToProps(state){
}

function mapDispatchToProps(dispatch){
  return({
    someVideos: (filter, redirect) => dispatch(someVideos(filter, redirect))
  });
}

export default connect(
  null, mapDispatchToProps
)(Searchbar);
