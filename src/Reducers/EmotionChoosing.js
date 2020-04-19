import { EMOTION_CHOOSEN,
        EMOTION_CHOOSEN_SUCCESS,
        EMOTION_CHOOSEN_FAILURE,
        EMOTION_ANS} from '../Actions/types';

const INITIAL_STATE = {
    emotionData: {
        emailId:'',
       answers:[]},
    loading: false,
    error: null
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case EMOTION_ANS:{
            state.emotionData.emailId = action.payload.emailId;
           state.emotionData.answers.push( [action.payload.b, action.payload.a, action.payload.c ]);
            return {...state};
        }

        case EMOTION_CHOOSEN:
            return {
                ...state,
                emotionData: action.payload,
                loading: true
            };
        case EMOTION_CHOOSEN_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                emotionData: action.payload
            };
        case EMOTION_CHOOSEN_FAILURE:
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