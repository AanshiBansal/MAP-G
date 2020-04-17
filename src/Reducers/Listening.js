import {LISTENING_CLICKED, LISTENING_CHOOSEN, LISTENING_CHOOSEN_SUCCESS, LISTENING_CHOOSEN_FAILURE} from '../Actions/types';

const INITIAL_STATE = {
    listeningData: {},
    loading: false,
    error: null
};

export default function (state = {INITIAL_STATE}, action) {
    switch(action.type) {
        case LISTENING_CLICKED:
            return { ...state, listeningData: action.payload};
        case LISTENING_CHOOSEN:
            return {
                ...state,
                listeningData: action.payload,
                loading: true
            };
        case LISTENING_CHOOSEN_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                listeningData: action.payload
            };
        case LISTENING_CHOOSEN_FAILURE:
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