import { combineReducers } from "redux";
import SessionReducer from './session_reducer';
import VideoReducer from './video_reducer';

export default combineReducers({
  session: SessionReducer,
  videos: VideoReducer
});
