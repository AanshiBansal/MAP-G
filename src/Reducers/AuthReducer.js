import { SIGN_IN, SIGN_OUT, REGISTRATION, REGISTER_USER} from '../Actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userInfo: null,
    registered: null
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
        case REGISTER_USER: {
            return {...state,registered:true};
        }
        default:
            return state;
    }
}