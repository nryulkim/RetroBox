import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import VideoMiddleware from './video_middleware';
import CommentMiddleware from './comment_middleware';
import LikeMiddleware from './like_middleware';
import SubscriptionMiddleware from './subscription_middleware';

export default applyMiddleware(
  SessionMiddleware,
  VideoMiddleware,
  CommentMiddleware,
  LikeMiddleware,
  SubscriptionMiddleware
);
