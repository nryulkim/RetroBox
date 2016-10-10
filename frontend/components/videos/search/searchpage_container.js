import { connect } from 'react-redux';
import SearchPage from './searchpage';

function mapStateToProps(state){
  return({
    videos: state.videos.list_videos
  });
}

export default connect(
  mapStateToProps, null
)(SearchPage);