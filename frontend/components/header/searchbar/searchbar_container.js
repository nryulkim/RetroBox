import { connect } from 'react-redux';
import Searchbar from './searchbar';
import { someVideos } from '../../../actions/video_actions';

function mapStateToProps(state){
  if(typeof state.videos.list_videos === "undefined") {
    return ({ videos: null });
  }

  return({
    videos: state.videos.list_videos
  });
}

function mapDispatchToProps(dispatch){
  return({
    someVideos: (filter, redirect) => dispatch(someVideos(filter, redirect))
  });
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Searchbar);
