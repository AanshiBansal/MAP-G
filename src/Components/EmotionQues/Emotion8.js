import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import ReactStopwatch from 'react-stopwatch';
import {Link} from "react-router-dom";

class Emotion8 extends Component {
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
                    limit="00:00:7"
                    onChange={({hours, minutes, seconds}) => {
                    }}
                    onCallback={() => console.log('Finish')}
                    render={({formatted, hours, minutes, seconds}) => {
                        return (
                            <div >
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 60 seconds'/>
                            </div>
                        );
                    }}
                />
                <img src={require('./pic8.jpg')} />
                <p>
                    What kind of emotion is it displaying? <br />
                    <Button><Link to="/emotion9">Anger</Link></Button>
                    <Button><Link to="/emotion9">Determination</Link></Button>
                    <Button><Link to="/emotion9">Disgust</Link></Button>
                    <Button><Link to="/emotion9">Happiness</Link></Button>
                    <Button><Link to="/emotion9">Hope</Link></Button>
                    <Button><Link to="/emotion9">Fear</Link></Button>
                    <Button><Link to="/emotion9">Sadness</Link></Button>
                    <Button><Link to="/emotion9">Pain</Link></Button>
                    <Button><Link to="/emotion9">Surprise</Link></Button>
                    <Button><Link to="/emotion9">Puzzle element</Link></Button>
                </p>
            </div>
        )
    }
}

export default Emotion8;