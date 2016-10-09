import React from 'react';
import VideoItem from "../components/videos/video_item";

export function shuffleArray(orgArray) {
  if(typeof orgArray === "undefined") { return undefined; }

  const array = Array.from(orgArray);
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

export function getVideoItems(videos){
  if(typeof videos === "undefined") { return(null); }
  const vids = Array.from(videos);
  return vids.map((vid, idx)=>{
    return <VideoItem key={vid.id} video={vid}/>;
  });
}

export function setDragAndDrop(id, callback){
  const $form = $(id);
  $form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function() {
    $form.addClass('is-dragover');
  })
  .on('dragleave dragend drop', function() {
    $form.removeClass('is-dragover');
  })
  .on('drop', function(e) {
    callback(e.originalEvent.dataTransfer.files[0]);
  });
}

export function timeSince(dateString) {
  const date = new Date(dateString);
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    if(interval === 1){
      return interval + " year";
    }
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 0) {
    if(interval === 1){
      return interval + " month";
    }
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 0) {
    if(interval === 1){
      return interval + " day";
    }
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 0) {
    if(interval === 1){
      return interval + " hour";
    }
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 0) {
    if(interval === 1){
      return interval + " minute";
    }
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
