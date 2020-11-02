export function secondsToMinutes(seconds: number, suffix?: boolean) {
  const minute = Math.floor(seconds / 60);
  return suffix ? minute + ' mins' : minute.toString();
}

function zeroPadding(num: number, size: number) {
  let str = num + '';
  while (str.length < size) {
    str = '0' + str;
  }
  return str;
}

export function secondsToTime(seconds: number) {
  const minute = Math.floor(seconds / 60);
  const second = Math.floor(seconds - (minute * 60));
  return zeroPadding(minute, 2) + ':' + zeroPadding(second, 2);
}

export function getCurrentUnixTimestamp(): number {
  return Math.round((new Date()).getTime() / 1000);
}

export function isMoreThan1Week(time1: Date, time2?: Date) {
  const WeekInMilliseconds = 1000 * 60 * 60 * 24 * 7;
  if (!time2) {
    time2 = new Date();
  }
  return time1 > time2
    ? (time1.getTime() - time2.getTime() > WeekInMilliseconds)
    : (time2.getTime() - time1.getTime() > WeekInMilliseconds);
}

export function getCustomDate(date: Date) {
  date = new Date(date);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const d = date.getDate();
  const m = months[date.getMonth()];
  const y = date.getFullYear();
  const hour = zeroPadding(date.getHours(), 2);
  const minute = zeroPadding(date.getMinutes(), 2);
  const second = zeroPadding(date.getSeconds(), 2);

  return d + ' ' + m + ' ' + y + ' ' + hour + ':' + minute + ':' + second;
}