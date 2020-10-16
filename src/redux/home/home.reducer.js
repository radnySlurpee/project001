import { HomeActionTypes } from './home.types';

const INITIAL_STATE = {
    currentHome: null
};

const homeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HomeActionTypes.SET_CURRENT_HOME:
            return {
                ...state,
                currentHome: action.payload
            }
        default:
            return state;
    }
};

export default homeReducer;