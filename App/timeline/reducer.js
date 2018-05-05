import { TOGGLE_EVENT, UPLOAD_PROFILE_PICTURE_SUCCESS } from './actions';

const defaultState = {
  activeApps: [],
  imageUrl:
    'https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753_1280.jpg',
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
    case UPLOAD_PROFILE_PICTURE_SUCCESS:
      const {
        imageUrl = 'https://cdn.pixabay.com/photo/2015/03/03/18/58/girl-657753_1280.jpg',
      } = action;
      return {
        ...state,
        imageUrl,
      };
    default:
      return state;
  }
};
