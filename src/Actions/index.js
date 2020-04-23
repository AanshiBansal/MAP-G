import {
    SIGN_IN,
    SIGN_OUT,
    PILE_CLICKED,
    PILE_CHOOSEN,
    PILE_CHOOSEN_SUCCESS,
    PILE_CHOOSEN_FAILURE,
    BALLOON_CLICKED,
    BALLOON_CHOOSEN,
    BALLOON_CHOOSEN_SUCCESS,
    BALLOON_CHOOSEN_FAILURE,
    LISTENING_CHOOSEN,
    LISTENING_CLICKED,
    LISTENING_CHOOSEN_SUCCESS,
    LISTENING_CHOOSEN_FAILURE,
    LISTENING_ANS,
    EMOTION_ANS,
    EMOTION_CHOOSEN,
    EMOTION_CHOOSEN_SUCCESS,
    EMOTION_CHOOSEN_FAILURE,
    DISABLE,
    REGISTRATION,
    GAMES_PLAYED,
    REGISTER_USER
} from '../Actions/types';
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
    type: BALLOON_CHOOSEN
});
const addBalloonSuccess = balloonData => ({
    type: BALLOON_CHOOSEN_SUCCESS,
    payload: {
        ...balloonData
    }
});
const addBalloonFailure = error => ({
    type: BALLOON_CHOOSEN_FAILURE,
    payload: {
        error
    }
});

const addListening = () => ({
    type: LISTENING_CHOOSEN
});
const addListeningSuccess = listeningData => ({
    type: LISTENING_CHOOSEN_SUCCESS,
    payload: {
        ...listeningData
    }
});
const addListeningFailure = error => ({
    type: LISTENING_CHOOSEN_FAILURE,
    payload: {
        error
    }
});

const addEmotion = () => ({
    type: EMOTION_CHOOSEN
});
const addEmotionSuccess = emotionData => ({
    type: EMOTION_CHOOSEN_SUCCESS,
    payload: {
        ...emotionData
    }
});
const addEmotionFailure = error => ({
    type: EMOTION_CHOOSEN_FAILURE,
    payload: {
        error
    }
});

const checkRegistration = (registered) => ({
    type: REGISTRATION,
    payload:registered
});

const gamesPlayed = (games) => ({
    types:GAMES_PLAYED,
    payload:games
});

export const signIn = (userInfo) => {
    return (dispatch) => {
        dispatch({
            type: SIGN_IN,
            payload: userInfo
        });
        axios
            .get(`${baseUrl}/userExist/?emailToCheck=${userInfo.email}`)
            .then(res => {
                console.log(res);
                dispatch(checkRegistration(res.data.emailToCheck));
                dispatch(gamesPlayed(res.data.games));
            })
            .catch(err => {
                // console.log(err);
            });
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
        console.log(data);
        dispatch(addPile());
        axios
            .post(`${baseUrl}/earnMaxearnMax/`,data)
            .then(res => {
                console.log(res);
                dispatch(addPileSuccess(res.data));
            })
            .catch(err => {
               // console.log(err);
                dispatch(addPileFailure(err.message));
            });
    };
};


export const balloonClicked = (data) => {
    return {
        type: BALLOON_CLICKED,
        payload : data,
    };
};

export const balloonGame = () => {
    return (dispatch,getState) => {
        const store = getState();
        const data = store.bal.balloonData;
        //console.log(data);
        dispatch(addBalloon());
        axios
            .post(`${baseUrl}/balloonGameballoonGame/`,data)
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

export const disable = (disable,id) => {
    return (dispatch,getState) => {
        dispatch({
            type: DISABLE,
            payload: disable,id
        });
        const store = getState();
        console.log(store.home.disable);
        axios
            .post(`${baseUrl}/updateGamesPlayed/?email=${store.auth.userInfo.email}&games_played=${store.home.disable}`)
           // .post(`${baseUrl}/updateGamesPlayed/`,{email:store.auth.userInfo.email,games_played:store.home.disable})
            .then(res => {
                //console.log(res);
            })
            .catch(err => {
                // console.log(err);
            });
    };

};

export const listeningClicked = (data) => {
    return {
        type: LISTENING_CLICKED,
        payload : data,
    };
};

export const listeningAns = data => {
    return {
        type: LISTENING_ANS,
        payload : data,
    };
};

export const listeningGame = () => {
    return (dispatch,getState) => {
        const store = getState();
        const data = store.list.listeningData;
        console.log(data);
        dispatch(addListening());
        axios
            .post(`${baseUrl}/listeningGamelisteningGame/`,data)
            .then(res => {
                console.log(res);
                dispatch(addListeningSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(addListeningFailure(err.message));
            });
    };
};

export const emotionAns = data => {
    return {
        type: EMOTION_ANS,
        payload : data,
    };
};

export const emotionGame = () => {
    return (dispatch,getState) => {
        const store = getState();
        const data = store.emo.emotionData;
        console.log(data);
        dispatch(addEmotion());
        axios
            .post(`${baseUrl}/emotionPredictoremotionPredictor/`,data)
            .then(res => {
               // console.log(res);
                dispatch(addEmotionSuccess(res.data));
            })
            .catch(err => {
                //console.log(err);
                dispatch(addEmotionFailure(err.message));
            });
    };
};

export const registerUser = (data, callback) => (dispatch) => {
    axios.post(`${baseUrl}/userdata/`, data)
        .then(res => {
            dispatch({type: REGISTER_USER, payload: res.data});
            callback();
        })
};

