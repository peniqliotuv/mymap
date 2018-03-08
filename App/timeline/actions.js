import CancerBaseSDK from 'cancerbase-sdk';
import { transformCancerBaseSDKEvents } from '../utils/cancerBaseSDKHelper';
import makeActionCreater from '../utils/actionFactory';

export const TOGGLE_EVENT = 'TOGGLE_EVENT';
export const toggleEvent = makeActionCreater(TOGGLE_EVENT, 'appName');

export const FETCH_TIMELINE_EVENTS_SUCCESS = 'FETCH_TIMELINE_EVENTS_SUCCESS';
export const fetchTimelineEventsSuccess = makeActionCreater(FETCH_TIMELINE_EVENTS_SUCCESS, 'events');

export const FETCH_TIMELINE_EVENTS_ERROR = 'FETCH_TIMELINE_EVENTS_ERROR';
export const fetchTimelineEventsError = makeActionCreater(FETCH_TIMELINE_EVENTS_ERROR, 'error');

export const fetchTimelineEvents = () => {
  return async (dispatch) => {
    console.log('in fetchTimelineEvents');
    try {
      const events = await CancerBaseSDK.timeline.get();
      dispatch(fetchTimelineEventsSuccess(transformCancerBaseSDKEvents(events)));
    } catch (e) {
      console.log(e);
      dispatch(fetchTimelineEventsError(e));
    }
  }
};