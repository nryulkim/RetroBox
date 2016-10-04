import React from 'react';
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Session from './session/session-container.js';

const _redirectIfLoggedIn = (nextState, replace) => {
  if(store.getState().session.currentUser){
    replace("/");
  }
};

const _redirectIfNotLoggedIn = (nextState, replace) => {
  if(!store.getState().session.currentUser){
    replace("/session/new");
  }
};

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Router path="sign-up" component={Session}/>
        <Router path="login" component={Session}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
