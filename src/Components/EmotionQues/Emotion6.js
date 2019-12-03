import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import ReactStopwatch from 'react-stopwatch';
import Emotion2 from "./Emotion2";
import {Link, Redirect} from "react-router-dom";

class Emotion6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }
    render() {
        return (
            <div>
                <ReactStopwatch
                    seconds={0}
                    minutes={0}
                    hours={0}
                    limit="00:00:30"
                    onChange={({hours, minutes, seconds}) => {
                    }}
                    onCallback={() => this._onButtonClick()}
                    render={({formatted, hours, minutes, seconds}) => {
                        return (
                            <div >
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 30 seconds'/>
                            </div>
                        );
                    }}
                />
                { (this.state.showComponent) ? <Redirect to="/emotion7"/> : null }
                <img src={require('./pic6.jpg')} />
                <p>
                    <span>
                        This is a story of a man who went to the
cinema to see a movie. He is now waiting
in line to see the movie. Just as they are
letting the audience into the cinema, a
pair of individuals rudely push their way
through the crowd bumping the man and
stepping on his bruised toe.

                    </span>
                </p>
                <p>
                    What kind of emotion is it displaying? <br />
                    <Button><Link to="/emotion7">Anger</Link></Button>
                    <Button><Link to="/emotion7">Determination</Link></Button>
                    <Button><Link to="/emotion7">Disgust</Link></Button>
                    <Button><Link to="/emotion7">Happiness</Link></Button>
                    <Button><Link to="/emotion7">Hope</Link></Button>
                    <Button><Link to="/emotion7">Fear</Link></Button>
                    <Button><Link to="/emotion7">Sadness</Link></Button>
                    <Button><Link to="/emotion7">Pain</Link></Button>
                    <Button><Link to="/emotion7">Surprise</Link></Button>
                    <Button><Link to="/emotion7">Puzzle element</Link></Button>
                </p>
            </div>
        )
    }
}

export default Emotion6;