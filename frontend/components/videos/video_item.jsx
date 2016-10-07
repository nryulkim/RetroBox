import React from 'react';
import { Link } from 'react-router';

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
        <h3 className="giveMeEllipsis"><Link to={path}>{video.title}</Link></h3>
      </div>
    );
  }
}

export default VideoItem;
