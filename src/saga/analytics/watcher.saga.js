import { takeLatest } from 'redux-saga/effects';

import { fetchAnalytics, watchAnalytics } from './analytics.saga';

import * as analyticsTypes from '../../redux/analytics/analyticsTypes';

export function* watchFetchAnalytics() {
  yield takeLatest(analyticsTypes.FETCH_ANALYTICS, fetchAnalytics);
}

export function* watchAnalytic() {
  yield takeLatest(analyticsTypes.WATCH_ANALYTICS, watchAnalytics);
}
