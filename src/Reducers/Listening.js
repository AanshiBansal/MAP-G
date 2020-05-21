import {LISTENING_CLICKED, LISTENING_CHOOSEN, LISTENING_CHOOSEN_SUCCESS, LISTENING_CHOOSEN_FAILURE,LISTENING_ANS} from '../Actions/types';

const INITIAL_STATE = {
    listeningData: {
        emailId:'',
        audioStart:["0"],
        audioPause:["0"],
        audioEnd:["0"],
        audioAdjust:["0"],
        answers:[["0","0","0"],["0","0","0"],["0","0","0"],["0","0","0"]]},
    loading: false,
    error: null
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case LISTENING_CLICKED:{
            if(action.payload.b===0) {
                console.log("hello audio started");
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
            state.listeningData.emailId = action.payload.emailId;
            let data = [];
            for (let i = 0; i < state.listeningData.answers.length; i++)
                data.push(state.listeningData.answers[i]);
            data[action.payload.id] = [action.payload.b, action.payload.a, action.payload.c ];
            console.log(data);
             return {...state,listeningData: { emailId:action.payload.emailId, audioStart:state.listeningData.audioStart,audioEnd:state.listeningData.audioEnd,audioPause: state.listeningData.audioPause,audioAdjust: state.listeningData.audioAdjust ,answers: data}};
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