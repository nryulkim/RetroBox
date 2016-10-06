import React from 'react';
import VideoItem from '../videos/video_item.jsx';

class Index extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div className="index-container">
        <div className="feeds">
          <div className="videos">
            <VideoItem />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
