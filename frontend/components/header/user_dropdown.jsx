import React from 'react';
import { Link } from 'react-router';

export default function UserDrop({currentUser, logout}) {
  const { username, email, icon_url } = currentUser;

  return(
    <div className="dropdown" id="user_drop">
      <div className="card_arrow"/>
      <p>{email}</p>
      <div className="group">
        <div className="big-user-circle">
          <Link to="/user"><img src={icon_url}></img></Link>
        </div>
        <ul className="user-info">
          <li>{username.charAt(0).toUpperCase() + username.slice(1)}</li>
        </ul>
      </div>
      <div className="user-buttons group">
        <button className="button" onClick={logout}>Sign Out</button>
      </div>
    </div>
  );
}
