import { PILE_CHOOSEN } from '../Actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch(action.type) {
        case PILE_CHOOSEN:
            //console.log(action.payload);
            return _.mapKeys(action.payload, 'id');

        // case POST_ONBOARDING_USER:
        //     state[action.payload.id] = action.payload;
        //     return state;

        default:
            return state;
    }
}