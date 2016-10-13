import React from 'react';
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { clearErrors } from '../actions/util_actions';
import { oneVideo, allVideos, someVideos } from '../actions/video_actions';
import App from './app';
import Session from './session/session_container.js';
import VideoForm from './videos/form/video_form_container.js';
import VideoShow from './videos/show/video_show_container.js';
import Index from './index/index_container.js';
import SearchPage from './videos/search/searchpage_container.js';

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
};

const _setCurrentVideo = (nextState) => {
  store.dispatch(oneVideo(nextState.params.id));
  if(typeof store.getState().videos.list_videos === "undefined"){
    _getVideos();
  }

  function handleOnWindowUnload(){
    if(handleOnWindowUnload.subscriptionAJAX){
      handleOnWindowUnload.subscriptionAJAX(false);
    }
    const keys = Object.keys(handleOnWindowUnload.likeAJAX);
    if(keys){
      for (let i = 0; i < keys.length; i++) {
        handleOnWindowUnload.likeAJAX[keys[i]](false);
      }
    }
  }
  handleOnWindowUnload.likeAJAX = {};

  window.onbeforeunload = handleOnWindowUnload;
};

const _getVideos = () => {
  store.dispatch(allVideos());
};

const _getSearchedVideos = (prevState, nextState) => {
  let state = nextState;
  if(typeof state === "function"){ state = prevState; }
  let filters = state.location.query;
  if(filters.query){
    filters.query = decodeURI(filters.query);
  }
  store.dispatch(someVideos(filters));
};

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} onEnter={_getVideos}/>
        <Router path="sign-up" component={Session} onLeave={_clearErrors} onEnter={_redirectIfLoggedIn}/>
        <Router path="login" component={Session} onLeave={_clearErrors} onEnter={_redirectIfLoggedIn}/>
        <Router path="upload" component={VideoForm} onEnter={_redirectIfNotLoggedIn}/>
        <Router path="video/:id" component={VideoShow} onEnter={_setCurrentVideo}/>
        <Router path="search" component={SearchPage} onEnter={_getSearchedVideos} onChange={_getSearchedVideos}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
