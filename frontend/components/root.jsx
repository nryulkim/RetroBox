import React from 'react';
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { clearErrors } from '../actions/util_actions';
import { oneVideo, allVideos } from '../actions/video_actions';
import App from './app';
import Session from './session/session_container.js';
import VideoForm from './videos/video_form_container.js';
import VideoShow from './videos/video_show_container.js';
import Index from './index/index_container.js';


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
const _setCurrentVideo = (nextState) => {
  store.dispatch(oneVideo(nextState.params.id));
}
const _getVideos = () => {
  store.dispatch(allVideos());
}

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} onEnter={_getVideos}/>
        <Router path="sign-up" component={Session} onLeave={_clearErrors} onEnter={_redirectIfLoggedIn}/>
        <Router path="login" component={Session} onLeave={_clearErrors} onEnter={_redirectIfLoggedIn}/>
        <Router path="upload" component={VideoForm} onEnter={_redirectIfNotLoggedIn}/>
        <Router path="video/:id" component={VideoShow} onEnter={_setCurrentVideo}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
