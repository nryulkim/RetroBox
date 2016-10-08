import React from 'react';
import { Link } from 'react-router';
import { timeSince } from '../../util/util_functions';

class VideoItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { video } = this.props;
    let path = `/video/${video.id}`;
    return(
      <div className="video-item">
        <Link to={path}><img src={video.thumbnail_url}/></Link>
        <div className="link">
          <h3 className="giveMeEllipsis"><Link to={path}>{video.title}</Link></h3>
          <h4>{video.username}</h4>
          <h5>{video.views} Views · {timeSince(video.created_at)} ago</h5>
        </div>
      </div>
    );
  }
}

export default VideoItem;
