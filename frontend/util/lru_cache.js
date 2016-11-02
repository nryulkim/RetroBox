class Node{
  constructor(val){
    this.head = null;
    this.tail = null;
    this.val = val;
  }
}

class LinkedList{
  constructor(){
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.tail = this.tail;
    this.tail.head = this.head;
    this.count = 0;
  }

  shift(){
    const node = this.tail.head;
    this.tail.head = node.head;
    node.head.tail = this.tail;
    this.count -= 1;
    return node;
  }

  push(node){
    if(node.head === null && node.tail === null){
      this.count += 1;
    }

    if(node.head !== null){
      node.head.tail = node.tail;
    }
    
    if(node.tail !== null){
      node.tail.head = node.head;
    }

    node.head = this.head;
    node.tail = this.head.tail;
    this.head.tail = node;
  }
}

export default class LRUCache{
  constructor(){
    this.video_ids = {};
    this.videos = new LinkedList();
  }

  count(){
    return this.videos.count;
  }

  add(video){
    let node = this.video_ids[video.id];
    if(!node){
      node = new Node(video);
      this.video_ids[video.id] = node;
    }
    this.videos.push(node);
    this._adjust();
  }

  get(id){
    if(this.video_ids[id]){
      return this.video_ids[id];
    }
    return null;
  }

  _adjust(){
    if(this.count() > 5){
      const id = this.videos.shift().val.id;
      delete this.video_ids[id];
    }
  }
}
