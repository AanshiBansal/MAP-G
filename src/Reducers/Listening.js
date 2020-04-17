import {LISTENING_CLICKED, LISTENING_CHOOSEN, LISTENING_CHOOSEN_SUCCESS, LISTENING_CHOOSEN_FAILURE} from '../Actions/types';

const INITIAL_STATE = {
    listeningData: {
        audioStart:[],
        audioPause:[],
        audioEnd:[],
        audioAdjust:[],
        answer1: '',
        answer2:'',
        answer3:''},
    loading: false,
    error: null
};

export default function (state = {INITIAL_STATE}, action) {
    switch(action.type) {
        case LISTENING_CLICKED:{
            if(b===0) {
                this.state.audioStart.push(time.toLocaleTimeString());
            }
            if(b===1) {
                this.state.audioPause.push(time.toLocaleString());
            }
            if(b===2) {
                this.state.audioEnd.push(time.toLocaleString());
            }
            if(b===3) {
                this.state.audioAdjust.push(time.toLocaleString());
            }
            return { ...state, listeningData: action.payload};
        }
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