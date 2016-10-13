import { connect } from 'react-redux';
import { newLike, destroyLike } from '../../../actions/like_actions';
import { receiveVideo } from '../../../actions/video_actions';

import VideoShow from './video_show';

const mapStateToProps = ({ session, videos }, ownProps) => {
  return({
    video: videos.currentVideo,
    currentUser: session.currentUser,
    videos: videos.list_videos
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    newLike: (like) => dispatch(newLike(like)),
    destroyLike: (id) => dispatch(destroyLike(id)),
    receiveVideo: (video) => dispatch(receiveVideo(video))
  });
};


export default connect(
  mapStateToProps, mapDispatchToProps
)(VideoShow);
