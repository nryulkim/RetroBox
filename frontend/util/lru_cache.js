
export default class LRUCache{
  constructor(){
    this.videos = {};
  }

  count(){
    return Object.keys(this.videos).length;
  }

  add(video){
    this.videos[video.id] = video;
  }

  get(id){
    return this.videos[id];
  }
}
