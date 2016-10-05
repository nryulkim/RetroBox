import React from 'react';
import { Link } from 'react-router';

export default function Header({ currentUser }){
  let button1 = <Link to="/login">Sign In</Link>;
  let button2 = <Link to="/sign-up">Sign Up</Link>;

  if(currentUser){
    button1 = <Link to="/upload">Upload</Link>;
    button2 = <Link to="/user" id="user-circle">{
        currentUser.username.slice(0,1).toUpperCase()
      }</Link>;
  }


  return(
    <div className="head group">
      <div className="logo">
        <div id="header_burger" />
        <a href="/"><img src={ window.retroBoxAssets.logo }/></a>
      </div>
      <div className="header_buttons">
        {button1}
        {button2}
      </div>
      <div className="search_holder">
        <form className="search">
          <input type="text"/>
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
}
