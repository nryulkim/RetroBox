import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionActions from './actions/session_actions';
import configureStore from './store/store.js';


document.addEventListener('DOMContentLoaded', () => {
    let initialState = {};
    if(window.currentUser){
      initialState = {session:{currentUser: window.currentUser}};
    }

    const store = configureStore(initialState);
    window.session = SessionActions;
    window.store = store;

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to RetroBox</h1>, root);
});
