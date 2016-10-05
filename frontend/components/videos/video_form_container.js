import { connect } from 'react-redux';
import { clearErrors } from '../../actions/util_actions';
import { updateVideo, newVideo } from '../../actions/video_actions';
import VideoForm from './video_form';

const mapStateToProps = ({ session, videos }, ownProps) => {
  let errorType = "updateVideo";
  let formType = "Update";
  if(ownProps.route.path === "upload"){
    errorType = "uploadVideo";
    formType = "Upload";
  }

  return({
    formType,
    currentUser: session.currentUser,
    errors: videos.forms[errorType].errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let actionCreator = updateVideo;

  if(ownProps.route.path === "upload"){
    actionCreator = newVideo;
  }

  return({
    process: (video, cb) => dispatch(actionCreator(video, cb))
  });
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(VideoForm);
