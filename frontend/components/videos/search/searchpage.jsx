import React from 'react';
import VideoItem from '../video_item';
import { Link, withRouter } from 'react-router';
import { timeSince } from '../../../util/util_functions';

class SearchPage extends React.Component{
  constructor(props){
    super(props);

    let queryObj = this.props.location.query;

    this.state = {
      orderBy: queryObj.sort ? queryObj.sort : "title",
      orderDir: queryObj.dir ? queryObj.dir.toUpperCase() : "ASC",
      sort: !queryObj.liked || queryObj.user
    };

    this.getVideos = this.getVideos.bind(this);
    this.handleOrderBy = this.handleOrderBy.bind(this);
    this.handleOrderDir = this.handleOrderDir.bind(this);
  }

  componentWillReceiveProps(){
    let queryObj = this.props.location.query;

    this.setState({
      orderBy: queryObj.sort ? queryObj.sort : "title",
      orderDir: queryObj.dir ? queryObj.dir.toUpperCase() : "ASC",
      sort: !queryObj.liked || queryObj.user
    });
  }

  handleOrderBy(e){
    this.setState({orderBy: e.currentTarget.value});
  }

  handleOrderDir(e){
    this.setState({orderDir: e.currentTarget.value});
  }

  getVideos(){
    let { videos } = this.props;
    const { orderBy, orderDir, sort } = this.state;
    if(typeof videos === "undefined"){return null;}
    if(sort){
      let sortFunc = (a, b) => {
        if(a[orderBy] > b[orderBy]){
          return 1;
        }else{
          return -1;
        }
      };
      if(orderDir === "DESC"){
        sortFunc = (a, b) => {
          if(a[orderBy] > b[orderBy]){
            return -1;
          }else{
            return 1;
          }
        };
      }

      videos = videos.sort(sortFunc);
    }

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
    const { sort } = this.state;

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

    let filter = null;
    if(sort){
      filter = (
        <div className="search-filter">
          <label htmlFor="filter-selector">Sort By:</label>
          <div className="styled-select">
            <select id="filter-selector" onChange={this.handleOrderBy} value={this.state.orderBy}>
              <option value="title">Title</option>
              <option value="views">Views</option>
              <option value="username">Username</option>
            </select>
          </div>
          <div className="styled-select">
            <select onChange={this.handleOrderDir} value={this.state.orderDir}>
              <option value="ASC">Ascending</option>
              <option value="DESC">Descending</option>
            </select>
          </div>
        </div>
      );
    }

    return(
      <div className="search-container group">
        <div className="search-header">
          {filter}
          <div className="item-container">
            {resultCount}
          </div>
        </div>
        <hr/>
        { this.getVideos() }
      </div>
    );
  }
}

export default withRouter(SearchPage);
