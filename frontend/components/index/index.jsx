import React from 'react';
import VideoItem from '../videos/video_item.jsx';
import ViewBar from '../viewbar/viewbar.jsx';
import { shuffleArray } from '../../util/util_functions.js';

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 2
    };

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(){
    const { count } = this.state;
    const width = $("html").width();
    if (width > 1200 && count !== 5){
      $('.index-container').width("1120px");
      this.setState({ count: 5 });
    }else if(width < 1201 && width > 950 && count !== 4){
      $('.index-container').width("900px");
      this.setState({ count: 4 });
    }else if(width < 951 && width > 700 && count !== 3){
      $('.index-container').width("680px");
      this.setState({ count: 3 });
    }else if(width < 701 && width > 570 && count !== 2){
      $('.index-container').width("460px");
      this.setState({ count: 2 });
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  randomVideos(videos){
    if(typeof videos === "undefined"){ return undefined; }
    return shuffleArray(videos).slice(0, 8);
  }

  render(){
    const { videos } = this.props;
    const { count } = this.state;

    return(
      <div className="index-container group">
        <ViewBar videos={this.randomVideos(videos)} count={count} title="Watch These Videos"/>
        <ViewBar videos={this.randomVideos(videos)} count={count} title="Even More Videos"/>
        <ViewBar videos={this.randomVideos(videos)} count={count} title="Old Commercials and more..."/>
        <ViewBar videos={this.randomVideos(videos)} count={count} title="You may like these videos"/>
        <ViewBar videos={this.randomVideos(videos)} count={count} title="Awesome videos from the old days."/>
      </div>
    );
  }
}

export default Index;
