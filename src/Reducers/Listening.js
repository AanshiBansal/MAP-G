import {LISTENING_CLICKED, LISTENING_CHOOSEN, LISTENING_CHOOSEN_SUCCESS, LISTENING_CHOOSEN_FAILURE,LISTENING_ANS} from '../Actions/types';

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
            if(action.payload.b===0) {
                state.listeningData.audioStart.push(action.payload.a);
            }
            if(action.payload.b===1) {
                state.listeningData.audioPause.push(action.payload.a);
            }
            if(action.payload.b===2) {
                state.listeningData.audioEnd.push(action.payload.a);
            }
            if(action.payload.b===3) {
                state.listeningData.audioAdjust.push(action.payload.a);
            }
            return { ...state};
        }
        case LISTENING_ANS:{
            if(action.payload.b===1){
                state.listeningData.answer1=action.payload.a;
            }
            if(action.payload.b===2){
                state.listeningData.answer2=action.payload.a;
            }
            if(action.payload.b===2){
                state.listeningData.answer3=action.payload.a;
            }
            return {...state};
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