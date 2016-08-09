import { combineReducers } from 'redux';

import vote from './vote';

const appState = combineReducers({
  vote,
});

export default appState;
