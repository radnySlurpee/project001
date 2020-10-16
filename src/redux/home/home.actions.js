import {HomeActionTypes} from './home.types';

export const setCurrentHome = home => ({
    type: HomeActionTypes.SET_CURRENT_HOME,
    payload: home
});