import { GEN_REPORT} from '../Actions/types';

const INITIAL_STATE = {
    isReport: null,
    userInfo: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GEN_REPORT: {
            console.log(action.payload);
            return { ...state, isReport: true, userInfo: action.payload};
        }
        default:
            return state;
    }
}