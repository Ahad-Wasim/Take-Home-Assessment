import { combineReducers } from 'redux';
import spacesReducer from './spaces';
import websocketReducer from './websocket';

export default combineReducers({
    spacesReducer,
    websocketReducer
});