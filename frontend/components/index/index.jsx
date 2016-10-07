import React from 'react';
import VideoItem from '../videos/video_item.jsx';
import ViewBar from '../viewbar/viewbar.jsx';
import { shuffleArray } from '../../util/util_functions.js';

class Index extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { videos } = this.props;

    return(
      <div className="index-container group">
        <ViewBar videos={shuffleArray(videos)} title="Watch These Videos"/>
        <ViewBar videos={shuffleArray(videos)} title="Even More Videos"/>
        <ViewBar videos={shuffleArray(videos)} title="Old Commercials and more..."/>
        <ViewBar videos={shuffleArray(videos)} title="You may like these videos"/>
        <ViewBar videos={shuffleArray(videos)} title="Awesome videos from the old days."/>
      </div>
    );
  }
}

export default Index;
