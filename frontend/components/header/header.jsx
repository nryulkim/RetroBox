import React from 'react';

export default function Header(props){
  return(
    <div id="head" className="group">
      <div id="logo">
        <div id="header_burger" />
        <a href="/"><img src="/images/logo.png" id="header_logo"/></a>
      </div>
      <form id="header_masthead">
        <div id="search">
          <input type="text" id="search_bar"/>
          <button type="submit" id="search_button"></button>
        </div>
        <div id="header_buttons">
          <a href="/login">Sign In</a>
          <a href="/sign-up">Sign Up</a>
        </div>
      </form>
    </div>
  );
}
