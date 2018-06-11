import { actionTypes } from '../constants/homeConstants';

const homeInitialState = {
    test: 'initial',
    message: 'Douglas'
}

const home = (state = homeInitialState, action) => {
    const { type } = action;
    switch (type) {
        case actionTypes.RECEIVE_HELLO_WORLD:
            console.log('REDUCER >> RECEIVE_HELLO_WORLD... ', action);
            return {
                ...state,
                ...{ test: action.payload }
            };
        default:
            return state;
    }
};

export default home;