import { connect } from 'react-redux';
import { newComment, deleteComment } from '../../../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = ({ session, videos }, ownProps) => {
  return({
    video_id: videos.currentVideo.id,
    currentUser: session.currentUser,
    comments: videos.currentVideo.comments
  });
};

function mapDispatchToProps(dispatch){
  return({
    newComment: (comment, callback) => dispatch(newComment(comment, callback)),
    deleteComment: (id) => dispatch(deleteComment(id))
  });
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Comments);
