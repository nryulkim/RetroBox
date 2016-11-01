import { connect } from 'react-redux';
import { newLike, destroyLike } from '../../../../actions/like_actions';
import { newComment, deleteComment, editComment } from '../../../../actions/comment_actions';

import Comments from './comments';

const mapStateToProps = ({ session, videos }, ownProps) => {
  return({
    videoId: videos.currentVideo.id,
    currentUser: session.currentUser,
    comments: videos.currentVideo.comments
  });
};

function mapDispatchToProps(dispatch){
  return({
    newComment: (comment, callback) => dispatch(newComment(comment, callback)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    editComment: (comment, callback) => dispatch(editComment(comment, callback)),
    newLike: (like) => dispatch(newLike(like)),
    destroyLike: (id) => dispatch(destroyLike(id))
  });
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Comments);
