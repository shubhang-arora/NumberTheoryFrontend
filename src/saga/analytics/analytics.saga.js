import { call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
//import { createWebSocketConnection } from './socketConnection';
import io from 'socket.io-client';
import httpService from '../../services/ApiManager.service';
import * as analyticsTypes from '../../redux/analytics/analyticsTypes';

const socketServerURL = 'http://localhost:5123';

export function* fetchAnalytics() {
  const httpBaseUrl = 'http://localhost:5123/api/';
  const method = 'GET';
  const path = 'analytics';
  const url = httpBaseUrl + path;
  let res = yield call(httpService, { url, method });

  if (res.status) {
    const analytics = res.data.analytics;
    yield put({
      type: analyticsTypes.FETCH_ANALYTICS_SUCCESS,
      payload: { analytics },
    });
  } else {
    const message = res.data.message;
    yield put({
      type: analyticsTypes.FETCH_ANALYTICS_FAILED,
      payload: { message },
    });
  }
}

let socket;
const connect = () => {
  socket = io(socketServerURL);
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

export function* watchAnalytics() {
  const socket = yield call(connect);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
      // An error from socketChannel will cause the saga jump to the catch block
      const payload = yield take(socketChannel);

      yield put({ type: analyticsTypes.GOT_UPDATED_ANALYTICS, payload });
    } catch (err) {
      console.error('socket error:', err);
      // socketChannel is still open in catch block
      // if we want end the socketChannel, we need close it explicitly
      // socketChannel.close()
    }
  }
}

// this function creates an event channel from a given socket
// Setup subscription to incoming `ping` events
function createSocketChannel(socket) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel((emit) => {
    const pingHandler = (event) => {
      emit(event);
    };

    const errorHandler = (errorEvent) => {
      // create an Error object and put it into the channel
      emit(new Error(errorEvent.reason));
    };

    // setup the subscription
    socket.on('updatedAnalytics', pingHandler);

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    const unsubscribe = () => {
      socket.off('updatedAnalytics', pingHandler);
    };

    return unsubscribe;
  });
}
