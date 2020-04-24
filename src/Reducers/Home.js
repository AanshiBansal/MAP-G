import { DISABLE, GAMES_PLAYED} from '../Actions/types';

const INITIAL_STATE = {
    disable:[false,false,false,false,false]
};

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case GAMES_PLAYED: {
            return  {...state,disable:action.payload};
        }
        case DISABLE:{
            let data = [];
            for (let i = 0; i < state.disable.length; i++)
                data.push(state.disable[i]);
            data[action.payload.id] = true;
            return {...state,disable: data};
        }

        default:
            return state;
    }
}