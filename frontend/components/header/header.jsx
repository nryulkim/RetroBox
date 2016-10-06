import React from 'react';
import { Link, withRouter } from 'react-router';
import UserDrop from './user_dropdown';

class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      showUserDrop: false,
    };

    this.toggleDrop = this.toggleDrop.bind(this);
    this.getButtons = this.getButtons.bind(this);
    this.signout = this.signout.bind(this);
  }

  signout(){
    this.props.logout();
    this.toggleDrop();
    this.props.router.replace("#");
  }

  toggleDrop(){
    this.setState({ showUserDrop: !this.state.showUserDrop });
  }

  getButtons(){
    const { currentUser, logout } = this.props;
    const { showUserDrop } = this.state;

    let buttons = [
      <Link className="button" to="/login">Sign In</Link>,
      <Link className="button" to="/sign-up">Sign Up</Link>
    ];

    if(currentUser){
      buttons = [
        <Link className="button" to="/upload">Upload</Link>,
        <div className="user_dropdown" onClick={this.toggleDrop}>
          <button id="user_circle">
            {currentUser.username.slice(0,1).toUpperCase()}
          </button>
          { showUserDrop ? <UserDrop
            currentUser={currentUser}
            logout={this.signout}/> : null }
        </div>
      ];
    }
    return buttons;
  }

  render(){
    let button1;
    let button2;
    const { currentUser, toggleBurger } = this.props;
    [button1, button2] = this.getButtons();

    return(
      <div className="head group">
        <div className="logo">
          <div id="header_burger" onClick={toggleBurger}/>
          <a href="#"><img src={ window.retroBoxAssets.logo }/></a>
        </div>
        <div className="header_buttons">
          {button1}
          {button2}
        </div>
        <div className="search_holder">
          <form className="search">
            <input type="text" placeholder="Search"/>
            <button type="submit"></button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
