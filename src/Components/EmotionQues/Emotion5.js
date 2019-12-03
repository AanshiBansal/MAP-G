import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import ReactStopwatch from 'react-stopwatch';
import Emotion2 from "./Emotion2";
import {Link, Redirect} from "react-router-dom";

class Emotion5 extends Component {
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
                    limit="00:00:07"
                    onChange={({hours, minutes, seconds}) => {
                    }}
                    onCallback={() => this._onButtonClick()}
                    render={({formatted, hours, minutes, seconds}) => {
                        return (
                            <div >
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 07 seconds'/>
                            </div>
                        );
                    }}
                />
                { (this.state.showComponent) ? <Redirect to="/emotion6"/> : null }
                <img src={require('./pic5.jpg')} />
                <p>
                    What kind of emotion is it displaying? <br />
                    <Button><Link to="/emotion6">Anger</Link></Button>
                    <Button><Link to="/emotion6">Determination</Link></Button>
                    <Button><Link to="/emotion6">Disgust</Link></Button>
                    <Button><Link to="/emotion6">Happiness</Link></Button>
                    <Button><Link to="/emotion6">Hope</Link></Button>
                    <Button><Link to="/emotion6">Fear</Link></Button>
                    <Button><Link to="/emotion6">Sadness</Link></Button>
                    <Button><Link to="/emotion6">Pain</Link></Button>
                    <Button><Link to="/emotion6">Surprise</Link></Button>
                    <Button><Link to="/emotion6">Puzzle element</Link></Button>
                </p>
            </div>
        )
    }
}

export default Emotion5;