import { SIGN_IN, SIGN_OUT,PILE_CLICKED, PILE_CHOOSEN,PILE_CHOOSEN_SUCCESS,PILE_CHOOSEN_FAILURE } from '../Actions/types';
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
// const baseUrl = 'http://127.0.0.1:8000';

export const pileClicked = (data) => {
    return {
        type: PILE_CLICKED,
        payload : data,
    };
};

export const pileGame = (data) => {
    return dispatch => {
        dispatch(addPile());
        console.log(data);
        axios
            .post(`http://127.0.0.1:8000/earnMaxearnMax/`,data)
            .then(res => {
                console.log(res);
                dispatch(addPileSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(addPileFailure(err.message));
            });
    };
};

