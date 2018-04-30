import makeActionCreator from '../utils/actionFactory';

export const TOGGLE_EVENT = 'TOGGLE_EVENT';
export const toggleEvent = makeActionCreator(TOGGLE_EVENT, 'appName');
