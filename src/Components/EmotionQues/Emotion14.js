import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import ReactStopwatch from 'react-stopwatch';
import Button from "semantic-ui-react/dist/es/elements/Button/Button";

class Emotion14 extends Component {
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
                <img src={require('./pic14.jpg')} />
                <p>
                    <span>
                      This is a story of a man who went to the
horse races to bet his last five hundred
dollars. He bet it all on horse number 7.
He is now watching the horses make the
final turn down the stretch to the finish
line. Horse number 9 and horse number 7
are neck and neck. It looks like horse
number 7 is going to take the lead.
                    </span>
                </p>
                <p>
                    What kind of emotion is it displaying? <br />
                    <Button>Anger</Button>
                    <Button>Determination</Button>
                    <Button>Disgust</Button>
                    <Button>Happiness</Button>
                    <Button>Hope</Button>
                    <Button>Fear</Button>
                    <Button>Sadness</Button>
                    <Button>Pain</Button>
                    <Button>Surprise</Button>
                    <Button>Puzzle element</Button>
                </p>
            </div>
        )
    }
}

export default Emotion14;