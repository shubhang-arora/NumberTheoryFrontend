import { all, fork } from 'redux-saga/effects';

import analytics from './analytics';
import customForm from './customForm';

const sagas = [analytics, customForm];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
