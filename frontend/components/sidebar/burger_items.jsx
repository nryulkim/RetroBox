import React from 'react';
import { Link } from 'react-router';

class BurgerItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      baseColor: "white"
    };
    this.turnGrey = this.turnGrey.bind(this);
    this.turnGreen = this.turnGreen.bind(this);
  }

  turnGrey(e){
    if(this.props.baseColor !== "white") {
      e.currentTarget.style.backgroundColor = "#CCC";
    }
  }

  turnGreen(e){
    e.currentTarget.style.backgroundColor = "#18CC1E";
    $(e.currentTarget).siblings().css('background-color', '#fff');
    this.setState({baseColor: "green"});
  }

  render(){
    const { path, name } = props;
    return(
      <li onMouseOver={this.turnGrey} onClick={this.turnGreen}>
        <Link to={path}>{name}</Link>
      </li>
    );
  }
}

export default BurgerItem;
