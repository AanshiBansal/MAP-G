import {PILE_CHOOSEN, PILE_CHOOSEN_FAILURE, PILE_CHOOSEN_SUCCESS} from '../Actions/types';

const INITIAL_STATE = {
    pileData: [],
    loading: false,
    error: null
};

export default function (state = {INITIAL_STATE}, action) {
    switch(action.type) {
        case PILE_CHOOSEN:
            return {
                ...state,
                loading: true
            };
        case PILE_CHOOSEN_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                pileData: action.payload
            };
        case PILE_CHOOSEN_FAILURE:
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