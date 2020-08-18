import { RECEIVE_SPACES, FETCHING_SPACES_STATUS, UPDATE_SPACES_COUNT } from '../actions/spaces';

const INITIAL_STATE = {
    fetchingSpaceStatus: false,
    spaceCollection: []
};

export default spacesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCHING_SPACES_STATUS:
            return {...state, fetchingSpaceStatus: action.payload };
        case RECEIVE_SPACES:
            return {...state, spaceCollection: action.payload };
            case UPDATE_SPACES_COUNT:
                const newCollection = state.spaceCollection.map(space => {
                // update spaceID in collection with new count (via sockets)
                if(space.id === action.payload.spaceId) {
                    return {...space, current_count: action.payload.count };    
                }
                return space
            });

            return {...state, spaceCollection: newCollection };
        default:
            return state;
    }
} 

