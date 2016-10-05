import React from 'react';
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { clearErrors } from '../actions/session_actions';
import App from './app';
import Session from './session/session-container.js';

const _redirectIfLoggedIn = (nextState, replace) => {
  if(store.getState().session.currentUser){
    replace("/");
  }
};

const _redirectIfNotLoggedIn = (nextState, replace) => {
  if(!store.getState().session.currentUser){
    replace("/login");
  }
};

const _clearErrors = () => {
  store.dispatch(clearErrors());
}

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Router path="sign-up" component={Session} onLeave={_clearErrors} onEnter={_redirectIfLoggedIn}/>
        <Router path="login" component={Session} onLeave={_clearErrors} onEnter={_redirectIfLoggedIn}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
