import { combineReducers } from 'redux';
import PileChoosing from './PileChoosing';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
    pile: PileChoosing,
    auth: AuthReducer
});

export default rootReducer;