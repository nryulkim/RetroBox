import React from 'react';
import ReactPlayer from 'react-player';

class VideoShow extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { video, currentUser } = this.props;
    if(!video){ return null; }

    let date = new Date(video.created_date);

    return(
      <div className="video-show-container group">
        <main>
          <div className="video-player">
            <ReactPlayer url={video.video_url} controls={true} width={640} height={360} playing="true"/>
          </div>
          <div className="video-title text-container container">
            <h1>{video.title}</h1>
            <div className="title-middle group">
              <div className="user-icon"></div>
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
          <div className="sampleVids group">
            <div className="video"></div>
            <h2>Title</h2>
            <h4>Username</h4>
            <h4>1000 views</h4>
          </div>
          <div className="sampleVids group">
            <div className="video"></div>
            <h2>Title</h2>
            <h4>Username</h4>
            <h4>1000 views</h4>
          </div>
          <div className="sampleVids group">
            <div className="video"></div>
            <h2>Title</h2>
            <h4>Username</h4>
            <h4>1000 views</h4>
          </div>
          <div className="sampleVids group">
            <div className="video"></div>
            <h2>Title</h2>
            <h4>Username</h4>
            <h4>1000 views</h4>
          </div>
          <div className="sampleVids group">
            <div className="video"></div>
            <h2>Title</h2>
            <h4>Username</h4>
            <h4>1000 views</h4>
          </div>
          <div className="sampleVids group">
            <div className="video"></div>
            <h2>Title</h2>
            <h4>Username</h4>
            <h4>1000 views</h4>
          </div>
          <div className="sampleVids group">
            <div className="video"></div>
            <h2>Title</h2>
            <h4>Username</h4>
            <h4>1000 views</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;
