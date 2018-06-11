import { put, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '../constants/homeConstants';
import { receiveHelloWorld } from '../actions/homeActions';

export function* requestHelloWorldListener(action) {
    console.log('SAGA [2] >> requestHelloWorld', action);
    yield put(receiveHelloWorld(action.payload));
}
export function* requestHelloWorld() {
    console.log('SAGA [1] >> requestHelloWorld');
    yield takeLatest(actionTypes.REQUEST_HELLO_WORLD, requestHelloWorldListener);
}

export default [
    requestHelloWorld,
];
