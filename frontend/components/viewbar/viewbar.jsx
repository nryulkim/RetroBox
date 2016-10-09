import React from 'react';
import VideoItem from '../videos/video_item';
import Carousel from './carousel';
import { getVideoItems } from '../../util/util_functions';

function ViewBar(props){
  const { title, count, videos } = props;
  if(typeof videos === "undefined"){ return null; }
  return(
    <div className="carousel-container">
      <div className="carousel">
        <h3>{title}</h3>
        <Carousel numToSlide={count} videos={getVideoItems(videos)}/>
      </div>
    </div>
  );
}

export default ViewBar;
