import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';

export default applyMiddleware(
  SessionMiddleware
);
