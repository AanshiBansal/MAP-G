import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import ReactStopwatch from 'react-stopwatch';
import {Link, Redirect} from "react-router-dom";

class Emotion11 extends Component {
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
                { (this.state.showComponent) ? <Redirect to="/emotion12"/> : null }
                <img src={require('./pic11.jpg')} />
                <p>
                    <span>
                        This is a story of a woman who went to
McDonalds for lunch. After a short wait in
line it is her turn to order. The cashier
says, "May I help you please?" The
woman acknowledges the cashier and
returns her attention to the menu.

                    </span>
                </p>
                <p>
                    What kind of emotion is it displaying? <br />
                    <Button><Link to="/emotion12">Anger</Link></Button>
                    <Button><Link to="/emotion12">Determination</Link></Button>
                    <Button><Link to="/emotion12">Disgust</Link></Button>
                    <Button><Link to="/emotion12">Happiness</Link></Button>
                    <Button><Link to="/emotion12">Hope</Link></Button>
                    <Button><Link to="/emotion12">Fear</Link></Button>
                    <Button><Link to="/emotion12">Sadness</Link></Button>
                    <Button><Link to="/emotion12">Pain</Link></Button>
                    <Button><Link to="/emotion12">Surprise</Link></Button>
                    <Button><Link to="/emotion12">Puzzle element</Link></Button>
                </p>
            </div>
        )
    }
}

export default Emotion11;