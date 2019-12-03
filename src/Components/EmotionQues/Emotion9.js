import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import ReactStopwatch from 'react-stopwatch';
import {Link, Redirect} from "react-router-dom";

class Emotion9 extends Component {
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
                { (this.state.showComponent) ? <Redirect to="/emotion10"/> : null }
                <img src={require('./pic9.jpg')} />
                <p>
                    What kind of emotion is it displaying? <br />
                    <Button><Link to="/emotion10">Anger</Link></Button>
                    <Button><Link to="/emotion10">Determination</Link></Button>
                    <Button><Link to="/emotion10">Disgust</Link></Button>
                    <Button><Link to="/emotion10">Happiness</Link></Button>
                    <Button><Link to="/emotion10">Hope</Link></Button>
                    <Button><Link to="/emotion10">Fear</Link></Button>
                    <Button><Link to="/emotion10">Sadness</Link></Button>
                    <Button><Link to="/emotion10">Pain</Link></Button>
                    <Button><Link to="/emotion10">Surprise</Link></Button>
                    <Button><Link to="/emotion10">Puzzle element</Link></Button>
                </p>
            </div>
        )
    }
}

export default Emotion9;