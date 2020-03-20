import { SIGN_IN,
         SIGN_OUT,
         PILE_CLICKED,
         PILE_CHOOSEN,
         PILE_CHOOSEN_SUCCESS,
         PILE_CHOOSEN_FAILURE,
         BALOON_CLICKED,
         BALOON_CHOOSEN,
         BALOON_CHOOSEN_SUCCESS,
         BALOON_CHOOSEN_FAILURE} from '../Actions/types';
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

const addBalloon = () => ({
    type: BALOON_CHOOSEN
});
const addBalloonSuccess = balloonData => ({
    type: BALOON_CHOOSEN_SUCCESS,
    payload: {
        ...balloonData
    }
});
const addBalloonFailure = error => ({
    type: BALOON_CHOOSEN_FAILURE,
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
const baseUrl = 'http://127.0.0.1:8000';

export const pileClicked = (data) => {
    return {
        type: PILE_CLICKED,
        payload : data,
    };
};

export const pileGame = () => {
    return (dispatch,getState) => {
        const store = getState();
        const data = store.pile.pileData;
        dispatch(addPile());
        axios
            .post(`${baseUrl}/earnMaxearnMax/`,data)
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


export const balloonClicked = (data) => {
    return {
        type: BALOON_CLICKED,
        payload : data,
    };
};

export const balloonGame = () => {
    return (dispatch,getState) => {
        const store = getState();
        const data = store.bal.balloonData;
        console.log(data);
        dispatch(addBalloon());
        axios
            .post(`${baseUrl}/ballonGameballonGame/`,data)
            .then(res => {
                console.log(res);
                dispatch(addBalloonSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(addBalloonFailure(err.message));
            });
    };
};