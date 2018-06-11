
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connectRouter } from 'connected-react-router';

import App from './App';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import homeSagas from './sagas/homeSaga';
import rootReducer from './rootReducer';

homeSagas.map(store.runSaga);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App history={history} />
        </Provider>,
        document.getElementById('root')
    );
};

render();

if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
        render();
    });

    // Reload reducers
    module.hot.accept('./rootReducer', () => {
        store.replaceReducer(connectRouter(history)(rootReducer));
    });
}

registerServiceWorker();
