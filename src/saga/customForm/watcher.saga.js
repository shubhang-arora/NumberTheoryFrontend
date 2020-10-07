import { takeLatest } from 'redux-saga/effects';

import { fetchFormElements } from './customForm.saga';

import * as customFormTypes from '../../redux/customForm/customFormTypes';

export function* watchFetchFormElements() {
  yield takeLatest(customFormTypes.FETCH_FORM, fetchFormElements);
}
