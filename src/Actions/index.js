import { SIGN_IN, SIGN_OUT, PILE_CHOOSEN,PILE_CHOOSEN_SUCCESS,PILE_CHOOSEN_FAILURE } from '../Actions/types';
import axios from 'axios';

const addPile = () => ({
    type: PILE_CHOOSEN
});
const addPileSuccess = pileData => ({
    type: PILE_CHOOSEN_SUCCESS,
    payload: {
        ...pileData
    }
});
const addPileFailure = error => ({
    type: PILE_CHOOSEN_FAILURE,
    payload: {
        error
    }
});


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
export const pileGame = (data) => {
    return dispatch => {
        dispatch(addPile());
        console.log(data);
        /*axios
            .post(`http://127.0.0.1:8000/earnMaxearnMax`,data)
            .then(res => {
                dispatch(addPileSuccess(res.data));
            })
            .catch(err => {
                dispatch(addPileFailure(err.message));
            });*/
    };
};

