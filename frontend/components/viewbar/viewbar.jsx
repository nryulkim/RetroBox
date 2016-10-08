import React from 'react';
import VideoItem from '../videos/video_item';
import Carousel from './carousel';

class ViewBar extends React.Component{
  constructor(props){
    super(props);
    this.getVideoItems = this.getVideoItems.bind(this);
  }

  getVideoItems(){
    if(typeof this.props.videos === "undefined") { return(null); }
    const videos = Array.from(this.props.videos);
    return videos.map((vid, idx)=>{
      return <VideoItem key={vid.id} video={vid}/>;
    });
  }

  render(){
    const { count, videos } = this.props;
    if(typeof videos === "undefined"){ return null; }
    return(
      <div className="carousel-container">
        <div className="carousel">
          <h3>{this.props.title}</h3>
          <Carousel numToSlide={count} videos={this.getVideoItems()}/>
        </div>
      </div>
    );
  }
}

export default ViewBar;
