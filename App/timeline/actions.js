import makeActionCreater from '../utils/actionFactory';

export const TOGGLE_EVENT = 'TOGGLE_EVENT';
export const toggleEvent = makeActionCreater(TOGGLE_EVENT, 'appName');
export const SET_PREFERENCE = 'SET_PREFERENCE';
export const setPreference = makeActionCreater(SET_PREFERENCE, 'settingType');
