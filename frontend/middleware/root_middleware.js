import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import VideoMiddleware from './video_middleware';
export default applyMiddleware(
  SessionMiddleware, VideoMiddleware
);
