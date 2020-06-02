import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import PileChoosing from './Components/PileChoosing';
import BalloonBlow from "./Components/BalloonBlow";
import ListeningGame from "./Components/ListeningGame";
import Game2 from "./Components/Questions";
import EmotionGame from "./Components/EmotionGame";
import SignUp from "./Components/SignUp"
import Emotion2 from "./Components/EmotionQues/Emotion2";
import Emotion3 from "./Components/EmotionQues/Emotion3";
import Emotion4 from "./Components/EmotionQues/Emotion4";
import Emotion5 from "./Components/EmotionQues/Emotion5";
import Emotion6 from "./Components/EmotionQues/Emotion6";
import Emotion7 from "./Components/EmotionQues/Emotion7";
import Emotion8 from "./Components/EmotionQues/Emotion8";
import Emotion9 from "./Components/EmotionQues/Emotion9";
import Emotion10 from "./Components/EmotionQues/Emotion10";
import Emotion11 from "./Components/EmotionQues/Emotion11";
import Emotion12 from "./Components/EmotionQues/Emotion12";
import Emotion13 from "./Components/EmotionQues/Emotion13";
import Emotion14 from "./Components/EmotionQues/Emotion14";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div className="App">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/sign-up" component={SignUp}/>
                        <Route exact path="/pile-choosing" component={PileChoosing}/>
                        <Route exact path="/listening" component={ListeningGame}/>
                        <Route exact path="/listening-questions" component={Game2}/>
                        <Route exact path="/balloon-blow" component={BalloonBlow}/>
                        <Route exact path="/emotion-sensing" component={EmotionGame}/>
                        <Route exact path="/emotion2" component={Emotion2}/>
                        <Route exact path="/emotion3" component={Emotion3}/>
                        <Route exact path="/emotion4" component={Emotion4}/>
                        <Route exact path="/emotion5" component={Emotion5}/>
                        <Route exact path="/emotion6" component={Emotion6}/>
                        <Route exact path="/emotion7" component={Emotion7}/>
                        <Route exact path="/emotion8" component={Emotion8}/>
                        <Route exact path="/emotion9" component={Emotion9}/>
                        <Route exact path="/emotion10" component={Emotion10}/>
                        <Route exact path="/emotion11" component={Emotion11}/>
                        <Route exact path="/emotion12" component={Emotion12}/>
                        <Route exact path="/emotion13" component={Emotion13}/>
                        <Route exact path="/emotion14" component={Emotion14}/>
                    </div>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App;
