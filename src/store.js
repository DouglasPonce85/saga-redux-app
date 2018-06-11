import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore } from 'redux-persist';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
    routerMiddleware(history)
];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const customEnhancer = composeEnhancer(applyMiddleware(...middleware));

const initialState = {};
const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    customEnhancer
);

persistStore(store);
store.runSaga = sagaMiddleware.run;

export default store;
