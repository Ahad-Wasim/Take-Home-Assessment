import services from  '../services';

// action creator
export const RECEIVE_WEBSOCKET_URL = 'RECEIVE_WEBSOCKET_URL';
function receiveWebsocketURL(websocketURL) {
    return {
        type: RECEIVE_WEBSOCKET_URL,
        payload: websocketURL
    }
}

export const RECEIVE_WEBSOCKET_TTL = 'RECEIVE_WEBSOCKET_TTL';
function receiveWebsocketTTL(websocketTTL) {
    return {
        type: RECEIVE_WEBSOCKET_TTL,
        payload: websocketTTL
    }
}

// fetch for the websocket URL
export const connectToWebsocket = () => {
    return async dispatch => {
        const response = await services.websocket.websocketURLFetch();
        
        dispatch(receiveWebsocketURL(response.url));
        dispatch(receiveWebsocketTTL(response.ttl));
    };
}