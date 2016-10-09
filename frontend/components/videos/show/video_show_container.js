import { connect } from 'react-redux';
import { oneVideo } from '../../../actions/video_actions';
import VideoShow from './video_show';

const mapStateToProps = ({ session, videos }, ownProps) => {
  return({
    video: videos.currentVideo,
    currentUser: session.currentUser,
    videos: videos.list_videos
  });
};

export default connect(
  mapStateToProps, null
)(VideoShow);
