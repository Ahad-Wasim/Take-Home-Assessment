import { RECEIVE_WEBSOCKET_URL, RECEIVE_WEBSOCKET_TTL } from '../actions/websocket';

const INITIAL_STATE = {
    url: '',
    ttl: null
};


export default websocketReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RECEIVE_WEBSOCKET_URL:
            return {...state, url: action.payload };
        case RECEIVE_WEBSOCKET_TTL:
            return {...state, ttl: action.payload };
        default:
            return state;
    }
} 

