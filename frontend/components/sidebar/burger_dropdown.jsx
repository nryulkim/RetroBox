import React from 'react';
import { Link } from 'react-router';


class BurgerDrop extends React.Component{
  constructor(props){
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.turnGrey = this.turnGrey.bind(this);
    this.turnBack = this.turnBack.bind(this);
  }

  changeColor(e){
    const $li = $(e.currentTarget);
    $li.addClass("selected");
    $li.siblings().removeClass("selected");
  }
  turnGrey(e){
    e.currentTarget.classList.add("hovered");
  }
  turnBack(e){
    e.currentTarget.classList.remove("hovered");
  }

  getLinks(){
    const paths = {
      "Home": '/',
    };

    const links = [];

    for (let i = 0; i < Object.keys(paths).length; i++) {
      const name = Object.keys(paths)[i];
      const path = paths[name];
      links.push(
        <li onClick={this.changeColor} onMouseOver={this.turnGrey} onMouseLeave={this.turnBack} key={path}>
          <Link to={path}>{name}</Link>
        </li>
      );
    }

    return(
      <ul>
        {links}
      </ul>
    );
  }

  render(){
    return (
      <div id="burger-drop" className="group">
        {this.getLinks()}
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
