import {BALOON_CLICKED, BALOON_CHOOSEN, BALOON_CHOOSEN_SUCCESS, BALOON_CHOOSEN_FAILURE} from '../Actions/types';

const INITIAL_STATE = {
    balloonData: {},
    loading: false,
    error: null
};

export default function (state = {INITIAL_STATE}, action) {
    switch(action.type) {
        case BALOON_CLICKED:
            return { ...state, balloonData: action.payload};
        case BALOON_CHOOSEN:
            return {
                ...state,
                loading: true
            };
        case BALOON_CHOOSEN_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                balloonData: action.payload
            };
        case BALOON_CHOOSEN_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}