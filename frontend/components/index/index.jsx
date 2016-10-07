import React from 'react';
import VideoItem from '../videos/video_item.jsx';
import ViewBar from '../viewbar/viewbar.jsx';
class Index extends React.Component{
  constructor(props){
    super(props);
  }

  shuffleArray(orgArray) {
    if(typeof orgArray === "undefined") { return undefined; }

    const array = Array.from(orgArray);
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  render(){
    const { videos } = this.props;

    return(
      <div className="index-container group">
        <ViewBar videos={this.shuffleArray(videos)} title="Watch These Videos"/>
        <ViewBar videos={this.shuffleArray(videos)} title="Even More Videos"/>
        <ViewBar videos={this.shuffleArray(videos)} title="Old Commercials and more..."/>
        <ViewBar videos={this.shuffleArray(videos)} title="You may like these videos"/>
        <ViewBar videos={this.shuffleArray(videos)} title="Awesome videos from the old days."/>
      </div>
    );
  }
}

export default Index;
