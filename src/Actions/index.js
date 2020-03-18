import { SIGN_IN, SIGN_OUT, PILE_CHOOSEN } from '../Actions/types';

export const addPileChoosen = ()=> (dispatch)=>{
    dispatch({type: PILE_CHOOSEN, payload: ""});
}

export const signIn = (userInfo) => {
    return {
        type: SIGN_IN,
        payload: userInfo
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};