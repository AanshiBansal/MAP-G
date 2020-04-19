import { combineReducers } from 'redux';
import PileChoosing from './PileChoosing';
import AuthReducer from './AuthReducer';
import Listening from "./Listening";
import BalloonBlowing from "./BalloonBlowing";
import EmotionChoosing from "./EmotionChoosing";

const rootReducer = combineReducers({
    pile: PileChoosing,
    auth: AuthReducer,
    list: Listening,
    bal: BalloonBlowing,
    emo: EmotionChoosing
});

export default rootReducer;