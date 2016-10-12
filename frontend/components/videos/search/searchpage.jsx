import React from 'react';
import VideoItem from '../video_item';
import { Link } from 'react-router';
import { timeSince } from '../../../util/util_functions';

export default class SearchPage extends React.Component{
  constructor(props){
    super(props);
    this.getVideos = this.getVideos.bind(this);
  }

  getVideos(){
    const { videos } = this.props;
    if(typeof videos === "undefined"){return null;}
    return videos.map((video, idx) => {
      let path = `/video/${video.id}`;
      return(
        <div className="video-result-container group" key={idx}>
          <Link to={path}>
            <div className="thumb">
              <img src={video.thumbnail_url}/>
            </div>
          </Link>
          <div className="link">
            <h3 className="giveMeEllipsis"><Link to={path}>{video.title}</Link></h3>
            <h4>{video.username}</h4>
            <h5>{video.views.toLocaleString('en-US')} Views · {timeSince(video.created_at)} ago</h5>
          </div>
          <p className="giveMeEllipsis">{video.description}</p>
        </div>
      );
    });
  }

  render(){
    const { videos } = this.props;
    let resultCount = <h4>No results found.</h4>;
    if(videos){
      const count = videos.length;
      if(count > 1){
        resultCount = <h4>About {count} results.</h4>;
      }else if (count === 1){
        resultCount = <h4>There is one result.</h4>;
      }else{
        resultCount = <h4>No results found.</h4>;
      }
    }

    return(
      <div className="search-container group">
        <div className="search-header">
          {resultCount}
        </div>
        <hr/>
        { this.getVideos() }
      </div>
    );
  }
}
