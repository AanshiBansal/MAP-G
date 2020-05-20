import {BALLOON_CLICKED, BALLOON_CHOOSEN, BALLOON_CHOOSEN_SUCCESS, BALLOON_CHOOSEN_FAILURE} from '../Actions/types';

const INITIAL_STATE = {
    balloonData: {},
    loading: false,
    error: null
};

export default function (state = {INITIAL_STATE}, action) {
    switch(action.type) {
        case BALLOON_CLICKED:
            return { ...state, balloonData: action.payload};
        case BALLOON_CHOOSEN:
            return {
                ...state,
                loading: true
            };
        case BALLOON_CHOOSEN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                balloonData: action.payload
            };
        case BALLOON_CHOOSEN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}