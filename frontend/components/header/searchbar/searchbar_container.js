import { connect } from 'react-redux';
import Searchbar from './searchbar';
import { someVideos } from '../../../actions/video_actions';

function mapStateToProps(state){
  if(typeof state.videos.list_videos === "undefined") {
    return ({ titles: null });
  }

  const titles = state.videos.list_videos.map(vid => vid.title);

  return({
    titles: titles
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
