import {
  SAVE_USER_PROFILE_EVENT,
  SET_SUBSCRIBED_NOTIFICATIONS,
} from './actions';

const defaultState = {
  userDisplayName: '',
  welcomeMessage: '',
  notifications: [],
  loggedIn: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_USER_PROFILE_EVENT:
      const { userDisplayName, welcomeMessage } = state;
      return {
        ...state,
        userDisplayName,
        welcomeMessage,
      };
    case SET_SUBSCRIBED_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.notifications,
      };
    default:
      return state;
  }
};
