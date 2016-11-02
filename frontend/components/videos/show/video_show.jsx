import React from 'react';
import ReactPlayer from 'react-player';
import VideoItem from '../video_item';
import LikeBar from './likes/like';
import Comments from './comments/comments_container';
import SubButton from './sub_button/sub_button_container';
import { shuffleArray } from '../../../util/util_functions.js';

class VideoShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      newVideo: false
    };
    this.getVideos = this.getVideos.bind(this);
  }

  componentDidMount(){
    const { videos } = this.state;
    const allVideos = this.props.videos;
    if(videos.length === 0 && allVideos && allVideos.length > 0){
      this.setState({ videos: this.getVideos(allVideos) });
    }
    if(this.props.video && this.props.id == this.props.video.id){
      this.setState({ newVideo: true });
    }
  }

  componentWillReceiveProps(nextProps){
    const { videos } = this.state;
    if((videos.length === 0 && nextProps.videos) ||
        this.props.video && this.props.video.id !== nextProps.video.id){
      this.setState({ videos: this.getVideos(nextProps.videos) });
    }
    this.setState({ newVideo: true });
  }

  getVideos(videos){
    if(typeof videos === "undefined"){return null;}
    const randVids = shuffleArray(videos).slice(0, 6);

    return randVids.map((vid) => {
      return(
        <div className="sampleVids group" key={vid.id}>
          <VideoItem video={vid}/>
        </div>
      );
    });
  }

  render(){
    if(this.state.newVideo){
      const { video, currentUser, newLike, destroyLike } = this.props;
      if(!video){ return null; }
      let date = new Date(video.created_date);
      let subButton = null;
      if(currentUser) { subButton = <SubButton channel={video.user}/>; }
      return(
        <div className="video-show-container group">
          <main>
            <div className="video-player">
              <ReactPlayer url={video.video_url} controls={true} width={640} height={360} playing/>
            </div>
            <div className="video-title text-container container">
              <h1>{video.title}</h1>
              <div className="title-middle-container group">
                <div className="title-middle group">
                  <div className="user-icon">
                    <img src={video.user.icon_url}></img>
                  </div>
                  <h3>{video.user.username}</h3>
                  <div className="view-counter group">
                    <h2>{video.views.toLocaleString('en-US')} views</h2>
                  </div>
                  {subButton}
                </div>
                <div className="view-counter-dislike-bar"/>
                <div className="view-counter-like-bar"/>
              </div>
              <div className="video-like-bar">
                <LikeBar
                  likeableType="Video"
                  likeableId={video.id}
                  likes={video.likes}
                  currentUserId={currentUser ? currentUser.id : null}
                  newLike={newLike}
                  destroyLike={destroyLike}/>
              </div>
            </div>
            <div className="video-description text-container container">
              <h4>Published on {date.toDateString().slice(4)}</h4>
              <p>{video.description}</p>
            </div>
            <div className="video-comments text-container container">
              <Comments/>
            </div>
          </main>


          <div className="video-side-bar container">
            <h4>Suggested Videos</h4>
            {this.state.videos}
          </div>
        </div>
      );
    }else{
      return (null);
    }
  }
}

export default VideoShow;
