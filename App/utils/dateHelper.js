const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Auguest',
  'September',
  'October',
  'November',
  'December',
];

// convert Date object to 'Day Month Date, Year'
export const dateToDayMonthDateYearString = (date) => {
  const dayString = days[date.getDay()];
  const monthString = months[date.getMonth()];
  return `${dayString} ${monthString} ${date.getDate()}, ${date.getFullYear()}`;
};

// convert Date object to 'HH:MM {AM/PM}'
export const dateToTimeString = (date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const hourString = hour === 0 || hour === 12 ? '12' : parseInt(hour % 12, 10);
  const minuteString =
    minute < 10 ? `0${parseInt(minute, 10)}` : `${parseInt(minute, 10)}`;
  return `${hourString}:${minuteString} ${hour < 12 ? 'AM' : 'PM'}`;
};
