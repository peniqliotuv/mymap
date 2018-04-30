import { AsyncStorage } from 'react-native';
import makeActionCreator from '../utils/actionFactory';
import { defaultNotifications } from '../utils/constants';

export const SAVE_USER_PROFILE_EVENT = 'SAVE_USER_PROFILE_EVENT';
export const saveUserProfileEvent = makeActionCreator(
  SAVE_USER_PROFILE_EVENT,
  'userDisplayName',
  'welcomeMessage'
);

export const SET_SUBSCRIBED_NOTIFICATIONS = 'SET_SUBSCRIBED_NOTIFICATIONS';
export const setSubscribedNotfications = makeActionCreator(
  SET_SUBSCRIBED_NOTIFICATIONS,
  'notifications'
);

export const fetchNotificationSubscriptions = () => {
  return async (dispatch) => {
    const valuesFromStorage = await AsyncStorage.multiGet(defaultNotifications);
    const filteredNotifs = valuesFromStorage
      .filter((pair) => {
        const value = pair[1] === 'true';
        return value;
      })
      .map((pair) => pair[0]);
    dispatch(setSubscribedNotfications(filteredNotifs));
  };
};
