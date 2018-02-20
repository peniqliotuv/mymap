import makeActionCreater from '../utils/actionFactory'

export const TOGGLE_EVENT = 'TOGGLE_EVENT';
export const toggleEvent = makeActionCreater(TOGGLE_EVENT, 'appName');
