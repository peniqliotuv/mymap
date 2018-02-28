import { dateToDayMonthDateYearString, dateToTimeString } from './dateHelper';

/**
 * Returns true if a CancerBaseSDK event is valid, false if malformed
 * An event is considered malformed if any apply:
 *  - it's not from a supported app
 *  - it's date cannot be converted into a Date object
 */
export const checkCancerBaseSDKEvent = (event) => {
  const allowedApps = ['medmind', 'side effect', 'infusion'];

  if (allowedApps.indexOf(event.category) < 0) return false;

  const date = new Date(event.date);
  if (isNaN(date.getTime())) return false;
  return true;
};

// transforms the event data received from CancerBaseSDK.timeline.get()
export const transformCancerBaseSDKEvents = (events) => {
  // sort the events by ISO date (can be done lexicographically)
  const sortedEvents = events.sort((a, b) => {
    return (a.date > b.date);
  });

  let tempDate;
  const result = [];
  for (let i = 0; i < sortedEvents.length; i++) {
    const event = sortedEvents[i];

    // only transform an event if it is not malformed
    if (checkCancerBaseSDKEvent(event)) {
      const date = new Date(event.date);

      // make a new object representing one day
      if (result.length === 0 || tempDate.toDateString() !== date.toDateString()) {
        tempDate = date;
        result.push({
          date: dateToDayMonthDateYearString(date),
          events: [],
        });
      }

      // append the event
      result[result.length - 1].events.push({
        appName: event.category,
        timestamp: dateToTimeString(date),
        body: event.data,
      });
    }
  }
  return result;
};
