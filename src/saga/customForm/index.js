import { fork, all } from 'redux-saga/effects';

import { watchFetchFormElements } from './watcher.saga';

export default function* customFormSaga() {
  yield all([fork(watchFetchFormElements)]);
}
