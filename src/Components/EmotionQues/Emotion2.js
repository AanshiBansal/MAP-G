import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import ReactStopwatch from 'react-stopwatch';
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import {Link, Redirect} from "react-router-dom";
import Emotion3 from "./Emotion3";

class Emotion1 extends Component {
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
                { (this.state.showComponent) ? <Redirect to="/emotion3"/> : null }
                <img src={require('./pic2.jpg')} />
                <p>

                    <span>
                        This is a story of a man who is going to a McDonalds for the first time. While
                        waiting in line, he stares up at the menu. Several people are served and without
                        realizing it he arrives at the front of the line. The cashier says, "May I help you
                        please?" The man acknowledges the cashier and returns his attention to the menu.
                    </span>
                </p>
                <p>
                    What kind of emotion is it displaying? <br />
                    <Button><Link to="/emotion3">Anger</Link></Button>
                    <Button><Link to="/emotion3">Determination</Link></Button>
                    <Button><Link to="/emotion3">Disgust</Link></Button>
                    <Button><Link to="/emotion3">Happiness</Link></Button>
                    <Button><Link to="/emotion3">Hope</Link></Button>
                    <Button><Link to="/emotion3">Fear</Link></Button>
                    <Button><Link to="/emotion3">Sadness</Link></Button>
                    <Button><Link to="/emotion3">Pain</Link></Button>
                    <Button><Link to="/emotion3">Surprise</Link></Button>
                    <Button><Link to="/emotion3">Puzzke element</Link></Button>
                </p>
            </div>
        )
    }
}

export default Emotion1;