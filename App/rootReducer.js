import { combineReducers } from 'redux';

import timeline from './timeline/reducer';
import settings from './settings/reducer';

export default combineReducers({
  timeline,
  settings,
});
