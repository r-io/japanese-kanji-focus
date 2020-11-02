import { combineReducers } from 'redux';
import { apiReducer } from './apiReducers';
import { authReducer } from './authReducers';
import { dialogReducer } from './dialogReducers';
import { loadingReducer } from './loadingReducers';
import { sessionReducer } from './sessionReducers';

const rootReducer = combineReducers({
    api: apiReducer,
    auth: authReducer,
    loading: loadingReducer,
    dialog: dialogReducer,
    session: sessionReducer
});

export default rootReducer;