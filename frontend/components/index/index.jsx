import React from 'react';
import VideoItem from '../videos/video_item.jsx';

class Index extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(typeof this.props.videos === "undefined") { return(null); }
    const videos = this.props.videos.map((video)=>{
      return <VideoItem key={video.id} video={video}/>;
    });


    return(
      <div className="index-container group">
        <div className="feeds">
          <div className="videos">
            {videos}
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
