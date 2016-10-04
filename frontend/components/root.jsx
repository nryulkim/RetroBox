import React from 'react';
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';


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
      </Route>
    </Router>
  </Provider>
);

export default Root;
