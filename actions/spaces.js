import services from  '../services';

// action creator
export const RECEIVE_SPACES = 'RECEIVE_SPACES';
function receiveSpaces(spaces_collection) {
    return {
        type: RECEIVE_SPACES,
        payload: spaces_collection
    }
}

export const FETCHING_SPACES_STATUS = 'FETCHING_SPACES_STATUS';
function fetchingSpaceStatus(status) {
    return {
        type: FETCHING_SPACES_STATUS,
        payload: status
    }
}

export const UPDATE_SPACES_COUNT = 'UPDATE_SPACES_COUNT';
export function updateSpacesCount(spaceId, count) {
    return {
        type: UPDATE_SPACES_COUNT,
        payload: { spaceId, count }
    }
}

// fetch for all spaces
export const getSpaces = () => {
    return async dispatch => {
        // toggle activity indicator
        dispatch(fetchingSpaceStatus(true));
        const { results } = await services.spaces.getSpaces();
        dispatch(receiveSpaces(results));
        // toggle activity indicator off
        dispatch(fetchingSpaceStatus(false));
    }
}