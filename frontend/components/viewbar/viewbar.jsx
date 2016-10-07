import React from 'react';
import VideoItem from '../videos/video_item';

class ViewBar extends React.Component{
  constructor(props){
    super(props);
    this.getVideoItems = this.getVideoItems.bind(this);
  }

  componentDidUpdate(){
    $(".carousel").carousel();
  }

  getVideoItems(){
    if(typeof this.props.videos === "undefined") { return(null); }
    const videos = Array.from(this.props.videos);

    const vidArr = [];
    while (videos.length > 0){
      vidArr.push(videos.splice(0, 4));
    }

    const ans = vidArr.map((vids, idx) => {
      const vidItems = vids.map((vid, idx)=>{
        return <VideoItem key={vid.id} video={vid}/>;
      });
      const className = idx === 0 ? "is-active" : "";
      return(
        <li className={className} key={idx}>{vidItems}</li>
      );
    });
    return ans;
  }

  render(){
    return(
      <div className="carousel-container">
        <figure className="carousel">
          <div className="button-container">
            <button data-dir="-1">{"<"}</button>
          </div>
          <div className="button-container">
            <button data-dir="1">{">"}</button>
          </div>

          <ul>
            <h1>{this.props.title}</h1>
            {this.getVideoItems()}
          </ul>
        </figure>
      </div>
    );
  }
}

export default ViewBar;
