import { call, put } from 'redux-saga/effects';

import httpService from '../../services/ApiManager.service';
import * as customFormTypes from '../../redux/customForm/customFormTypes';

export function* fetchFormElements() {
  const httpBaseUrl = 'http://localhost:5123/api/';
  const method = 'GET';
  const path = 'customForm';
  const url = httpBaseUrl + path;
  let res = yield call(httpService, { url, method });

  if (res.status) {
    const formElements = res.data.form;
    yield put({
      type: customFormTypes.FETCH_FORM_SUCCESS,
      payload: { formElements },
    });
  } else {
    const message = res.data.message;
    yield put({
      type: customFormTypes.FETCH_FORM_FAILED,
      payload: { message },
    });
  }
}
