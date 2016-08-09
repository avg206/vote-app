import { combineReducers } from 'redux';

import vote from './vote';
import image from './image';
import loader from './loader';

const appState = combineReducers({
  vote,
  image,
  loader,
});

export default appState;
