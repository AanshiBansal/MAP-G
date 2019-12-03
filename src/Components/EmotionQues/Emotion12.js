import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import ReactStopwatch from 'react-stopwatch';
import {Link} from "react-router-dom";

class Emotion12 extends Component {
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
                    onCallback={() => console.log('Finish')}
                    render={({formatted, hours, minutes, seconds}) => {
                        return (
                            <div >
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 60 seconds'/>
                            </div>
                        );
                    }}
                />
                <img src={require('./pic12.jpg')} />
                <p>
                    What kind of emotion is it displaying? <br />
                    <Button><Link to="/emotion13">Anger</Link></Button>
                    <Button><Link to="/emotion13">Determination</Link></Button>
                    <Button><Link to="/emotion13">Disgust</Link></Button>
                    <Button><Link to="/emotion13">Happiness</Link></Button>
                    <Button><Link to="/emotion13">Hope</Link></Button>
                    <Button><Link to="/emotion13">Fear</Link></Button>
                    <Button><Link to="/emotion13">Sadness</Link></Button>
                    <Button><Link to="/emotion13">Pain</Link></Button>
                    <Button><Link to="/emotion13">Surprise</Link></Button>
                    <Button><Link to="/emotion13">Puzzle element</Link></Button>
                </p>
            </div>
        )
    }
}

export default Emotion12;