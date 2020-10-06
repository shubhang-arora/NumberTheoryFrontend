import { all, fork } from 'redux-saga/effects';

import analytics from './analytics';

const sagas = [analytics];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
