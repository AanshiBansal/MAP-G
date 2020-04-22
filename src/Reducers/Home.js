import { DISABLE, GAMES_PLAYED} from '../Actions/types';

const INITIAL_STATE = {
    disable:[false,false,false,false,false]
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case DISABLE:{
            state.disable.splice(action.payload.id,0,true);
            return {...state};
        }
        case GAMES_PLAYED: {
            return  {...state,disable:action.payload};
        }
        default:
            return state;
    }
}