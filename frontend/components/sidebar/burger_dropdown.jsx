import React from 'react';
import { Link } from 'react-router';


class BurgerDrop extends React.Component{
  constructor(props){
    super(props);
    this.getLinks = this.getLinks.bind(this);
  }

  componentDidUpdate(){
    const $selected = $(`#burger-drop a[href="#${this.props.path}"]`);
    if($selected.length){
      $selected.parent().addClass("selected").siblings().removeClass("selected");
    }else{
      $('#burger-drop li').removeClass("selected");
    }
  }

  getLinks(){
    const paths = {
      Upload: '/upload'
    };

    const links = [];
    for (let i = 0; i < Object.keys(paths).length; i++) {
      const name = Object.keys(paths)[i];
      const path = paths[name];
      links.push(
        <li key={path}>
          <Link to={path}>{name}</Link>
        </li>
      );
    }

    return links;
  }

  render(){
    return (
      <div id="burger-drop" className="group">
        <ul>
          <li className="selected">
            <Link to="/"><i className="fa fa-home" aria-hidden="true"></i>  Home</Link>
          </li>

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
