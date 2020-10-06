import { fork, all } from 'redux-saga/effects';

import { watchFetchAnalytics, watchAnalytic } from './watcher.saga';

export default function* analyticsSaga() {
  yield all([fork(watchFetchAnalytics), fork(watchAnalytic)]);
}
