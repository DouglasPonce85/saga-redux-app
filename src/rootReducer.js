import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from './reducers/homeReducer';

const appReducer = combineReducers({
    router: routerReducer,
    home
});

const rootReducer = (state, action) => {
    if (action.type === 'LOG_OUT') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;