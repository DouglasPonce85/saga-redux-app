import { actionTypes } from '../constants/homeConstants';

export function requestHelloWorld() {
  console.log('ACTION >> requestHelloWorld');

  return {
    type: actionTypes.REQUEST_HELLO_WORLD,
    payload: 'REQUEST'
  };
};

export function receiveHelloWorld() {
  return {
    type: actionTypes.RECEIVE_HELLO_WORLD,
    payload: 'RECEIVE'
  };
};

