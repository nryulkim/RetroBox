import { connect } from 'react-redux';
import Index from './index';

const mapStateToProps = ({ videos }, ownProps) => {
  return({
    videos: videos.list_videos
  });
};


export default connect(
  mapStateToProps, null
)(Index);
