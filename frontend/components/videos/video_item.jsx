import React from 'react';

class VideoItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { video } = this.props;

    return(
      <div className="video-item">
      </div>
    );
  }
}

export default VideoItem;
