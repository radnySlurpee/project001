import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import homeReducer from './home/home.reducer';
import navigationReducer from './navigation/navigation.reducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist: []
}

/* export default combineReducers({
     home: homeReducer,
}); */

const rootReducer = combineReducers({
    home: homeReducer,
    navigation: navigationReducer
});

export default persistReducer(persistConfig, rootReducer);