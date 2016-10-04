import React from 'react';
import { Link } from 'react-router';

export default function Header(props){
  return(
    <div className="head group">
      <div className="logo">
        <div id="header_burger" />
        <a href="/"><img src="/images/logo.png"/></a>
      </div>
      <div className="header_masthead">
        <form className="search">
          <input type="text"/>
          <button type="submit"></button>
        </form>
        <div className="header_buttons">
          <Link to="/login">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
