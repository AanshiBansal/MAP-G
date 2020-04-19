import { combineReducers } from 'redux';
import PileChoosing from './PileChoosing';
import AuthReducer from './AuthReducer';
import Listening from "./Listening";
import BalloonBlowing from "./BalloonBlowing";
import EmotionChoosing from "./EmotionChoosing";
import Home from "./Home";

const rootReducer = combineReducers({
    pile: PileChoosing,
    auth: AuthReducer,
    list: Listening,
    bal: BalloonBlowing,
    emo: EmotionChoosing,
    home:Home
});

export default rootReducer;