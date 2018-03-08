import TOGGLE_EVENT from './actions';

const defaultState = {
  activeApps: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_EVENT':
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
    default:
      return state;
  }
};
