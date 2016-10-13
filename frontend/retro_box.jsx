import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import * as SubActions from './actions/subscription_actions';
import * as SubAPI from './util/subs_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
    let initialState = {};
    if(window.currentUser){
      initialState = {session:{currentUser: window.currentUser}};
    }
    const store = configureStore(initialState);
    window.SubActions = SubActions;
    window.SubAPI = SubAPI;
    window.store = store;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
