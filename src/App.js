import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Game2 from './Components/Game2';
import PileChoosing from './Components/PileChoosing'
import Home from "./Components/Home";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div className="App">
                        <Route exact path="/" component={Home}/>
                        {//<Route exact path="/card-matching" component={Game}/>
                        }
                        <Route exact path="/pile-choosing" component={PileChoosing}/>
                        <Route exact path="/listening" component={Game2}/>
                    </div>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App;
