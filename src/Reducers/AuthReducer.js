import { SIGN_IN, SIGN_OUT, REGISTRATION, GAMES_PLAYED } from '../Actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userInfo: null,
    registered: null,
    gamesPlayed: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN: {
            console.log(action.payload);
            return { ...state, isSignedIn: true, userInfo: action.payload};
        }
        case SIGN_OUT: {
            return {...state, isSignedIn: false, userId: null};
        }
        case REGISTRATION: {
            return {...state, registered:action.payload};
        }
        case GAMES_PLAYED: {
            return  {...state,gamesPlayed:action.payload};
        }
        default:
            return state;
    }
}