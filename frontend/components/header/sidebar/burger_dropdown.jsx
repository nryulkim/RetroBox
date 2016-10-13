import React from 'react';
import { Link } from 'react-router';


class BurgerDrop extends React.Component{
  constructor(props){
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.highlightSelected = this.highlightSelected.bind(this);
    this.getSubs = this.getSubs.bind(this);
  }

  componentDidMount(){
    const { currentUser, getSubscriptions } = this.props;
    this.highlightSelected();
    if(currentUser && !currentUser.subscriptions){
      getSubscriptions(currentUser.id);
    }
  }

  componentDidUpdate(){
    this.highlightSelected();
  }

  highlightSelected(){
    const $selected = $(`#burger-drop a[href="#${this.props.path}"]`);
    if($selected.length){
      $selected.parent().addClass("selected").siblings().removeClass("selected");
    }else{
      $('#burger-drop li').removeClass("selected");
    }
  }

  getLinks(){
    if(this.props.currentUser){
      let paths = {
        Upload: ['/upload', 'fa-upload'],
        "Liked Videos": [`/search?liked=1&user=${this.props.currentUser.id}`, "fa-thumbs-up"],
        "Disliked Videos": [`/search?liked=-1&user=${this.props.currentUser.id}`, "fa-thumbs-down"]
      };
      let links = [<h1 key="library">Library</h1>];
      for (let i = 0; i < Object.keys(paths).length; i++) {
        const name = Object.keys(paths)[i];
        const path = paths[name][0];
        const icon = paths[name][1];
        links.push(
          <li key={path}>
            <Link to={path}><i className={"fa " + icon} aria-hidden="true"/>{name}</Link>
          </li>
        );
      }
      links.push(<div className="divider" key="divider"/>);
      links = links.concat(this.getSubs());
      return links;
    }else{
      return null;
    }
  }

  getSubs(){
    const { currentUser } = this.props;
    if(currentUser.subscriptions){
      let returnArr = [<h1 key="subs">Subscriptions</h1>];
      return returnArr.concat(currentUser.subscriptions.map((channel) => {
        let path = `/search?subs=1&sub_id=${channel.id}`;
        return (
          <li key={path}>
            <Link to={path}>
              <i><img src={channel.icon_url}/></i>
              {channel.username}
            </Link>
          </li>
        );
      }));
    }else{
      return [<img src={window.retroBoxAssets.loader} key="loader"/>];
    }
  }

  render(){
    return (
      <div id="burger-drop" className="group">
        <ul>
          <li className="selected">
            <Link to="/">
              <i className="fa fa-home" aria-hidden="true"/>
              Home
            </Link>
          </li>
          <li>
            <Link to='/search?liked=1&limit=10&dir=desc'>
              <i className="fa fa-heart" aria-hidden="true"/>
              Most Liked Videos
            </Link>
          </li>
          <li>
            <Link to='/search?sort=views&limit=10&dir=desc'>
              <i className="fa fa-eye" aria-hidden="true"/>
              Most Viewed Videos
            </Link>
          </li>
          <div className="divider"></div>
          {this.getLinks()}
        </ul>
      </div>
    );
  }
}


export default BurgerDrop;
// <li><Link to="/">My Channel</Link></li>
// <li><Link to="/">Trending</Link></li>
// <li><Link to="/">History</Link></li>
// <li><Link to="/">Watch Later</Link></li>

// <ul>
//   <h1>Browse Channels</h1>
// </ul>
// <ul>
//   <h1>Other Channels</h1>
// </ul>
