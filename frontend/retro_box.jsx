import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import * as VideoActions from './actions/video_actions';

document.addEventListener('DOMContentLoaded', () => {
    let initialState = {};
    if(window.currentUser){
      initialState = {session:{currentUser: window.currentUser}};
    }
    const store = configureStore(initialState);
    window.VideoActions = VideoActions;
    window.store = store;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
