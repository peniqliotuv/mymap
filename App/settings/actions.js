import makeActionCreater from '../utils/actionFactory'

export const SAVE_USER_PROFILE_EVENT = 'SAVE_USER_PROFILE_EVENT';
export const saveUserProfileEvent = makeActionCreater(SAVE_USER_PROFILE_EVENT, 'userDisplayName', 'welcomeMessage');
