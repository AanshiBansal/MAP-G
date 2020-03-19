import { combineReducers } from 'redux';
import PileChoosing from './PileChoosing';
import AuthReducer from './AuthReducer';
import Listening from "./Listening";

const rootReducer = combineReducers({
    pile: PileChoosing,
    auth: AuthReducer,
    list: Listening
});

export default rootReducer;