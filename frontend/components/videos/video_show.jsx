import React from 'react';
import ReactPlayer from 'react-player';
import VideoItem from './video_item';
import { shuffleArray } from '../../util/util_functions.js';

class VideoShow extends React.Component{
  constructor(props){
    super(props);
    this.getVideos = this.getVideos.bind(this);
  }

  getVideos(){
    const { videos } = this.props;
    if(typeof videos === "undefined"){return null;}
    const randVids = shuffleArray(videos).slice(0, 6);

    return randVids.map((vid) => {
      return(
        <div className="sampleVids group" key={vid.id}>
          <VideoItem video={vid}/>
          <div>

          </div>
        </div>
      );
    });
  }

  render(){
    const { video, currentUser } = this.props;
    if(!video){ return null; }

    let date = new Date(video.created_date);
    return(
      <div className="video-show-container group">
        <main>
          <div className="video-player">
            <ReactPlayer url={video.video_url} controls={true} width={640} height={360} playing/>
          </div>
          <div className="video-title text-container container">
            <h1>{video.title}</h1>
            <div className="title-middle group">
              <div className="user-icon">
                  <img src={video.user.icon_url}></img>
              </div>
              <h3>{video.user.username}</h3>
              <div className="view-counter">
                <h2>{video.views} views</h2>
              </div>
            </div>
          </div>
          <div className="video-description text-container container">
            <h4>Published on {date.toDateString().slice(4)}</h4>
            <p>{video.description}</p>
          </div>
          <div className="video-comments text-container container">
            <h1>Video Comments</h1>
          </div>
        </main>


        <div className="video-side-bar container">
          <h4>Suggested Videos</h4>
          {this.getVideos()}
        </div>
      </div>
    );
  }
}

export default VideoShow;
