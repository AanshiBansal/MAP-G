import {LISTENING} from '../Actions/types';
// import _ from 'lodash';

const INITIAL_STATE = {
    isSubmit: null,
    ldata: []
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case LISTENING:
        {
            console.log(action.payload);
            return { ...state, isSubmit: true, ldata: action.payload};
        }
        default:
            return state;
    }
}