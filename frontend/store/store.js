import { createStore } from 'redux';
import RootReducer from '../reducer/root_reducer';
import RootMiddleware from '../middleware/root_middleware';

export default (state = {}) => {
  return createStore(
    RootReducer,
    state,
    RootMiddleware
  );
};
