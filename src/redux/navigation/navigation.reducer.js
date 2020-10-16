import { NavigationActionTypes } from './navigation.types';

const INITITAL_STATE = {
    hidden:true,
    NavigationData: [],
};

const navigationReducer = (state = INITITAL_STATE, action) => {
    switch (action.type) {
        case NavigationActionTypes.TOGGLE_NAVIGATION_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        default:
            return state;
    }
}

export default navigationReducer;