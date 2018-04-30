import SAVE_USER_PROFILE_EVENT from './actions';

const defaultState = {
  userDisplayName: '',
  welcomeMessage: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_USER_PROFILE_EVENT':
      const { userDisplayName, welcomeMessage } = state;
      return {
        userDisplayName,
        welcomeMessage,
      };
    default:
      return state;
  }
};
