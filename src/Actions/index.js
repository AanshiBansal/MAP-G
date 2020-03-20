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

const addBaloon = () => ({
    type: BALOON_CHOOSEN
});
const addBaloonSuccess = baloonData => ({
    type: BALOON_CHOOSEN_SUCCESS,
    payload: {
        ...baloonData
    }
});
const addBaloonFailure = error => ({
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


export const baloonClicked = (data) => {
    return {
        type: BALOON_CLICKED,
        payload : data,
    };
};

export const baloonGame = () => {
    return (dispatch,getState) => {
        const store = getState();
        const data = store.bal.baloonData;
        console.log(data);
        dispatch(addBaloon());
        axios
            .post(`${baseUrl}/ballonGameballonGame/`,data)
            .then(res => {
                console.log(res);
                dispatch(addBaloonSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(addBaloonFailure(err.message));
            });
    };
};