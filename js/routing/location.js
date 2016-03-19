import qs from 'qs';
import { browserHistory } from 'react-router';

const QS_OPTIONS = {
  arrayFormat: 'repeat'
};

export function getLocationSearch() {
  return qs.parse(location.search.slice(1), QS_OPTIONS);
}

export function setLocationSearch(params, opts) {
  const searchString = `?${qs.stringify(params, QS_OPTIONS)}`;
  if (opts.replace) {
    browserHistory.replace(searchString);
  } else {
    browserHistory.push(searchString);
  }
}
