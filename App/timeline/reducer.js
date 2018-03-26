import {
  TOGGLE_EVENT,
  FETCH_TIMELINE_EVENTS_SUCCESS,
  FETCH_TIMELINE_EVENTS_ERROR,
} from './actions';

const defaultState = {
  activeApps: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_EVENT:
      const { appName } = action;
      const activeApps = state.activeApps;
      if (activeApps.includes(appName)) {
        const index = activeApps.indexOf(appName);
        activeApps.splice(index, 1);
      }
      else {
        activeApps.push(appName);
      }
      return {
        ...state,
        activeApps,
      };
    case FETCH_TIMELINE_EVENTS_SUCCESS:
      const { events } = action;
      return {
        ...state,
        events,
      };
    case FETCH_TIMELINE_EVENTS_ERROR:
      const { error } = action;
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};
