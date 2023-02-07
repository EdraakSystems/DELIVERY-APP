import {Platform, Linking} from 'react-native';
import moment from 'moment';

export function getTimeAgo(date) {
  const relativeTime = {
    s: '%d s',
    ss: '%d s',
    m: '1 min',
    mm: '%d mins',
    h: '1 h',
    hh: '%d h',
    d: '1 d',
    dd: '%d d',
    M: '1 m',
    MM: '%d m',
    y: '1 y',
    yy: '%d y',
  };

  return moment(date).fromNow(
    moment.updateLocale('en', {
      relativeTime,
    }),
  );
}

export function openUrl(url) {
  try {
    Linking.openURL(url);
  } catch {}
}

export function openSmsUrl(phone, body) {
  return openUrl(`sms:${phone}${getSMSDivider()}body=${body}`);
}

function getSMSDivider() {
  return Platform.OS === 'ios' ? '&' : '?';
}

export function openPhoneUrl(phone) {
  return openUrl(`tel:${phone}`);
}
