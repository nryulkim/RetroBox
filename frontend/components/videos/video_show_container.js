import { connect } from 'react-redux';
import { oneVideo } from '../../actions/video_actions';
import VideoShow from './video_show';

const mapStateToProps = ({ session, videos }, ownProps) => {
  return({
    video: videos.currentVideo,
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    getVideo: (id) => dispatch(oneVideo(id))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(VideoShow);
